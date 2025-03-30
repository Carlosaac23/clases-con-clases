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

const linkinPark = new Banda(
  'Linkin Park',
  ['Chester Bennington', 'Mike Shinoda', 'Rob Bourdon', 'Joe Hahn'],
  [
    { title: 'Hybrid Theory', songs: ['In the End', 'Crawling', 'Runaway', 'Papercut'] },
    { title: 'One More Light', songs: ['Good Goodbye', 'Battle Symphony', 'Invisible', 'Nobody Can Save Me', 'One More Light'] },
    { title: 'Living Things', songs: ['BURN IT DOWN', 'CASTLE OF GLASS'] },
    { title: 'Meteora', songs: ['Numb', 'Foreword', 'Faint', 'Session', 'Lying from You'] },
  ]
);

const theWeeknd = new Artista('The Weeknd', [
  { title: 'Starboy', songs: ['Starboy', 'True Colors', 'I Fell It Coming'] },
  { title: 'After Hours', songs: ['Heartless', 'Blinding Lights', 'Save Your Tears', 'After Hours', 'In Your Eyes', 'Faith'] },
]);

console.log(linkinPark.getFirstAlbum());
console.log(linkinPark.getAllMembers());
console.log(linkinPark.getRandomSong('one more light'));
console.log(theWeeknd.getFirstAlbum());
console.log(theWeeknd.getRandomSong('after hours'));
