const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  },
  printPlaylist: function() {
    for (const key in this.playlists) {
      const playlist = this.playlists[key];
      console.log(`${key}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },
  printTracks: function() {
    for (const key in this.tracks) {
      const track = this.tracks[key];
      console.log(`${key}: ${track.name} by ${track.artist} (${track.album})`);
    }
  }
};

library.printTracks();
library.printPlaylist();