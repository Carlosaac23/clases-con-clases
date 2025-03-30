import { Banda, Artista } from './clases';

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

export { linkinPark, theWeeknd };
