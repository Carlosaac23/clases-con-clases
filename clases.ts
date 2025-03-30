interface Album {
  title: string;
  songs: string[];
}

class Banda {
  name: string;
  members: string[];
  albums: Album[];

  constructor(name: string, members: string[], albums: Album[]) {
    this.name = name;
    this.members = members;
    this.albums = albums;
  }

  getFirstAlbum(): Album | string {
    if (!this.albums || this.albums.length === 0) return 'No tiene álbumes';
    return this.albums[0];
  }

  getAllMembers(): string[] {
    return this.members;
  }

  getRandomSong(albumName: string): string {
    const album = this.albums.find(album => album.title.toLowerCase() === albumName.toLowerCase());
    if (!album) {
      return 'No tiene ningún álbum';
    } else {
      if (!album.songs || album.songs.length === 0) return 'Ese álbum no tiene canciones';
      const randomSong = Math.floor(Math.random() * album.songs.length);
      return album.songs[randomSong];
    }
  }
}

class Artista {
  name: string;
  albums: Album[];

  constructor(name: string, albums: Album[]) {
    this.name = name;
    this.albums = albums;
  }

  getFirstAlbum(): Album | string {
    if (!this.albums || this.albums.length === 0) return 'No tiene álbumes';
    return this.albums[0];
  }

  getRandomSong(albumName: string): string {
    const album = this.albums.find(album => album.title.toLowerCase() === albumName.toLowerCase());
    if (!album) {
      return 'No tiene ningún álbum';
    } else {
      if (!album.songs || album.songs.length === 0) return 'Ese álbum no tiene canciones';
      const randomSong = Math.floor(Math.random() * album.songs.length);
      return album.songs[randomSong];
    }
  }
}

export { Banda, Artista };
