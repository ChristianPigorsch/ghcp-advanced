export interface Album {
  id: string;
  title: string;
  year: number;
  songwriter: string;
}

export const albums: Album[] = [
  { id: "1", title: "Imagine", year: 1971, songwriter: "John Lennon" },
  { id: "2", title: "Hotel California", year: 1976, songwriter: "Don Felder / Don Henley / Glenn Frey" },
  { id: "3", title: "Like a Rolling Stone", year: 1965, songwriter: "Bob Dylan" },
  { id: "4", title: "Purple Rain", year: 1984, songwriter: "Prince" },
  { id: "5", title: "Bohemian Rhapsody", year: 1975, songwriter: "Freddie Mercury" },
  { id: "6", title: "Smells Like Teen Spirit", year: 1991, songwriter: "Kurt Cobain / Krist Novoselic / Dave Grohl" },
  { id: "7", title: "Billie Jean", year: 1982, songwriter: "Michael Jackson" },
  { id: "8", title: "Stairway to Heaven", year: 1971, songwriter: "Jimmy Page / Robert Plant" },
  { id: "9", title: "What a Wonderful World", year: 1967, songwriter: "Bob Thiele / George David Weiss" },
  { id: "10", title: "Respect", year: 1967, songwriter: "Otis Redding" }
];
