const { exec } = require("child_process");

const artists = [
  { name: "Oasis", country: "UK" },
  { name: "Blur", country: "UK" },
  { name: "Metallica", country: "USA" },
  { name: "Megadeth", country: "USA" },
  { name: "Ramones", country: "USA" },
  { name: "Sex Pistols", country: "UK" },
  { name: "Patricio Rey y sus Redonditos de Ricota", country: "ARG" },
  { name: "Sumo", country: "ARG" },
  { name: "Green Day", country: "USA" },
  { name: "The Offspring", country: "USA" },
];

const albums = [
  { artistId: 2048, name: "What's the Story Morning Glory?", year: 1995 },
  { artistId: 4096, name: "Parklife", year: 1994 },
  { artistId: 6144, name: "Kill Em' All", year: 1983 },
  { artistId: 8192, name: "Rust In Peace", year: 1990 },
  { artistId: 10240, name: "Brain Drain", year: 1989 },
  { artistId: 12288, name: "Nevermind The Bollocks", year: 1977 },
  { artistId: 14336, name: "La Mosca y la Sopa", year: 1991 },
  { artistId: 16384, name: "After Chabon", year: 1987 },
  { artistId: 18438, name: "Dookie", year: 1994 },
  { artistId: 20480, name: "Smash", year: 1994 },
];

const tracks = [
  { albumId: 2112, name: "Wonderwall", dur: 200, genres: ["Brit Pop", "Alternative"] },
  { albumId: 2112, name: "Champagne Supernova", dur: 360, genres: ["Alternative", "Rock"] },
  { albumId: 4160, name: "Girls & Boys", dur: 160, genres: ["Alternative", "Indie"] },
  { albumId: 6208, name: "Seek and Destroy", dur: 245, genres: ["Metal", "Thrash"] },
  { albumId: 8256, name: "Holy Wars... The Punishment Due", dur: 400, genres: ["Metal", "Thrash"] },
  { albumId: 10304, name: "I Believe in Miracles", dur: 200, genres: ["Punk Rock"] },
  { albumId: 10304, name: "Pet Sematary", dur: 230, genres: ["Punk Rock", "Rock"] },
  { albumId: 12352, name: "Holidays in the Sun", dur: 180, genres: ["Punk Rock"] },
  { albumId: 14400, name: "Salando las Heridas", dur: 325, genres: ["Rock Nacional"] },
  { albumId: 16448, name: "No tan distintos", dur: 260, genres: ["Rock Nacional"] },
  { albumId: 16448, name: "Banderitas y globos", dur: 278, genres: ["Rock Nacional"] },
  { albumId: 18496, name: "Basket Case", dur: 220, genres: ["Punk Rock"] },
  { albumId: 18496, name: "When I Come Around", dur: 296, genres: ["Punk Rock", "Alternative"] },
  { albumId: 20544, name: "Come Out and Play", dur: 265, genres: ["Punk Rock", "Alternative"] },
  { albumId: 20544, name: "Self Esteem", dur: 320, genres: ["Punk Rock"] },
];

const usuarios = [
  { username: "Nico" }
];

const createArtists = () => {
  artists.forEach((a) => {
    run(`node main.js addArtist "${a.name}" "${a.country}"`);
  });
};

const createAlbums = () => {
  albums.forEach((a) => {
    run(`node main.js addAlbum ${a.artistId} "${a.name}" ${a.year}`);
  });
};

const createTracks = () => {
  tracks.forEach((t) => {
    run(`node main.js addTrack ${t.albumId} "${t.name}" ${t.dur} ${t.genres.reduce((acc, cur) => acc.concat(`"${cur}"` + " "), "")}`);
  });
};

const createUsuarios = () => {
  usuarios.forEach((u) => {
    run(`node main.js createUsuario "${u.username}"`);
  });
};

const run = (cmd) => {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

createArtists();
// createAlbums();
// createTracks();
// createUsuarios();
