<#
Prüft Secure Boot Status und Signaturen von EFI-Bootdateien.
Nutzen: Als Administrator ausführen.
Beispiel: pwsh -NoProfile -ExecutionPolicy Bypass -File .\scripts\check-secureboot.ps1
#>

function Assert-Admin {
    $isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
    if (-not $isAdmin) {
        Write-Warning 'Dieses Skript sollte als Administrator ausgeführt werden. Einige Prüfungen benötigen erhöhte Rechte.'
    }
}

function Get-SecureBootInfo {
    Write-Host "== Secure Boot: Status & Quelle ==" -ForegroundColor Cyan

    # Prefer native cmdlet if available
    $confirmCmd = Get-Command -Name Confirm-SecureBootUEFI -ErrorAction SilentlyContinue
    if ($confirmCmd) {
        try {
            $enabled = Confirm-SecureBootUEFI
            Write-Host "Confirm-SecureBootUEFI: $enabled"
        } catch {
            Write-Warning "Confirm-SecureBootUEFI schlug fehl: $_"
        }
    } else {
        Write-Host "Cmdlet Confirm-SecureBootUEFI nicht vorhanden; versuche Registry-Fallback."
        try {
            $reg = Get-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\SecureBoot\State' -ErrorAction Stop
            if ($reg -and $reg.UEFISecureBootEnabled -ne $null) {
                Write-Host "Registry UEFISecureBootEnabled: $($reg.UEFISecureBootEnabled)"
            } else {
                Write-Host "Keine UEFISecureBootEnabled-Information in Registry gefunden."
            }
        } catch {
            Write-Warning "Registry-Abfrage schlug fehl oder Secure Boot Registry-Pfad nicht vorhanden."
        }
    }

    # Optional: ComputerInfo property (falls verfügbar)
    try {
        $ci = Get-ComputerInfo -Property 'Os*','Cs*' -ErrorAction SilentlyContinue
        if ($ci -and $ci.PSObject.Properties.Name -contains 'SecureBoot') {
            Write-Host "Get-ComputerInfo SecureBoot: $($ci.SecureBoot)"
        }
    } catch { }

    Write-Host ""
}

function Check-EFISignature {
    param(
        [Parameter(Mandatory=$true)] [string] $Path
    )

    if (-not (Test-Path $Path)) {
        Write-Host "Datei nicht gefunden: $Path" -ForegroundColor Yellow
        return
    }

    Write-Host "== Signatur für: $Path ==" -ForegroundColor Cyan
    try {
        $sig = Get-AuthenticodeSignature -FilePath $Path -ErrorAction Stop
        Write-Host "Status: $($sig.Status)"
        if ($sig.SignerCertificate) {
            Write-Host "Signer Subject: $($sig.SignerCertificate.Subject)"
            Write-Host "Signer Issuer:  $($sig.SignerCertificate.Issuer)"
            Write-Host "Thumbprint:    $($sig.SignerCertificate.Thumbprint)"
            Write-Host "NotBefore:     $($sig.SignerCertificate.NotBefore)"
            Write-Host "NotAfter:      $($sig.SignerCertificate.NotAfter)"
        } else {
            Write-Host "Keine Signaturzertifikats-Informationen gefunden." -ForegroundColor Yellow
        }
    } catch {
        Write-Warning "Fehler beim Prüfen der Signatur: $_"
    }
    Write-Host ""
}

function List-RelatedCertificates {
    Write-Host "== Relevante Zertifikate aus Zertifikatspeicher (kurzer Überblick) ==" -ForegroundColor Cyan
    $stores = @('Cert:\LocalMachine\TrustedPublisher','Cert:\LocalMachine\AuthRoot','Cert:\LocalMachine\TrustedPeople')
    foreach ($s in $stores) {
        try {
            $items = Get-ChildItem -Path $s -ErrorAction Stop | Select-Object -First 10
            if ($items) {
                Write-Host "Store: $s" -ForegroundColor Gray
                foreach ($c in $items) {
                    Write-Host (" - {0} ({1})" -f $c.Subject, $c.Thumbprint)
                }
            }
        } catch {
            # ignore stores we cannot read
        }
    }
    Write-Host ""
}

# --- Main ---
Assert-Admin
Get-SecureBootInfo

# Prüfe typische EFI-Bootdateien
$efiFiles = @(
    "$env:SystemRoot\\System32\\winload.efi",
    "$env:SystemDrive\\EFI\\Microsoft\\Boot\\bootmgfw.efi",
    "$env:SystemDrive\\EFI\\Boot\\bootx64.efi"
)

foreach ($f in $efiFiles) {
    Check-EFISignature -Path $f
}

List-RelatedCertificates

Write-Host "Prüfung abgeschlossen. Hinweise: Secure Boot Schlüsseldaten (PK/KEK/DB/DBX) liegen in der UEFI-Variable-Ebene; direkte Abfrage erfordert spezielle Tools oder UEFI-API-Zugriff." -ForegroundColor Green
