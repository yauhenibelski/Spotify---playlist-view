interface Song {
  artist: string;
  songName: string;
  time: string;
  id: number;
  cover: string;
  coverImg:string;
}

const songs: readonly Song[] = [
  {
    artist: 'Miley Cyrus',
    songName: 'Flowers',
    cover: 'Flowers',
    coverImg: 'Flowers',
    time: '3:20',
    id: 0,
  },
  {
    artist: 'Sza',
    songName: 'Kill Bill',
    cover: 'Sos',
    coverImg: 'Sos',
    time: '2:32',
    id: 1,
  },
  {
    artist: 'Steve Lacy',
    songName: 'Bad Habit',
    cover: 'Gemini Rights',
    coverImg: 'GeminiRights',
    time: '3:52',
    id: 2,
  },
  {
    artist: 'Mark Menday, Seb Mont',
    songName: 'Talk To Me',
    cover: 'Talk To Me',
    coverImg: 'TalkToMe',
    time: '2:28',
    id: 3,
  },
  {
    artist: 'Olivia Rodrigo',
    songName: 'Good 4 u',
    cover: 'Sour',
    coverImg: 'Sour',
    time: '2:58',
    id: 4,
  },
  {
    artist: 'Lil Nas X',
    songName: 'INDUSTRY BABY',
    cover: 'Singiel',
    coverImg: 'Singiel',
    time: '3:32',
    id: 5,
  },
  {
    artist: 'Harry Styles',
    songName: 'Watermelon Sugar',
    cover: 'Fine Line',
    coverImg: 'FineLine',
    time: '2:54',
    id: 6,
  },
  {
    artist: 'Isak Daniels',
    songName: 'Always',
    cover: 'Fine Line',
    coverImg: 'FineLine1',
    time: '3:33',
    id: 7,
  },
];
export { songs };
