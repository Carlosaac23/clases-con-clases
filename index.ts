import { linkinPark, theWeeknd } from './instancias';

function main() {
  console.log(linkinPark.getFirstAlbum());
  console.log(linkinPark.getAllMembers());
  console.log(linkinPark.getRandomSong('one more light'));
  console.log(theWeeknd.getFirstAlbum());
  console.log(theWeeknd.getRandomSong('after hours'));
  console.log('Un cambio desde GitHub');
}

main();
