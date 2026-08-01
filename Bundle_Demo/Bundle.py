import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Parameter für den Kreis (Basisraum S^1)
theta = np.linspace(0, 2*np.pi, 200)

# Faser-Koordinate (Intervall)
v = np.linspace(-1, 1, 20)

Theta, V = np.meshgrid(theta, v)

# --- 1. Triviales Bündel: Zylinder ---
R = 2.0  # Radius des Kreises

X_cyl = R * np.cos(Theta)
Y_cyl = R * np.sin(Theta)
Z_cyl = V  # Faser einfach nach oben/unten

# --- 2. Nichttriviales Bündel: Möbiusband ---
# Verdrehung der Faser um den Kreis
X_mob = (R + V * np.cos(Theta / 2)) * np.cos(Theta)
Y_mob = (R + V * np.cos(Theta / 2)) * np.sin(Theta)
Z_mob = V * np.sin(Theta / 2)

fig = plt.figure(figsize=(12, 5))

# Zylinder
ax1 = fig.add_subplot(1, 2, 1, projection='3d')
ax1.plot_surface(X_cyl, Y_cyl, Z_cyl, cmap='viridis', alpha=0.8)
ax1.set_title("Triviales Faserbündel: Zylinder")
ax1.set_xlabel("x")
ax1.set_ylabel("y")
ax1.set_zlabel("Faser (v)")

# Möbiusband
ax2 = fig.add_subplot(1, 2, 2, projection='3d')
ax2.plot_surface(X_mob, Y_mob, Z_mob, cmap='plasma', alpha=0.8)
ax2.set_title("Nichttriviales Faserbündel: Möbiusband")
ax2.set_xlabel("x")
ax2.set_ylabel("y")
ax2.set_zlabel("Faser (v)")

plt.tight_layout()
plt.show()
