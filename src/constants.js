import { newTrackId } from './helpers';

export const PLAYER_STATUSES = {
  PLAYING: 'playing',
  PAUSED: 'paused'
};

export const INITIAL_TRACKS = [
  {
    title: 'Primavera',
    artist: 'Dylonious',
    url: '/Primavera.mp3',
    id: newTrackId()
  },
  {
    title: "Cruis'n the Metaverse",
    artist: 'Dylonious',
    url: "/Cruisn.mp3",
    id: newTrackId()
  },
  {
    title: 'Takeoff',
    artist: 'Dylonious',
    url: '/Takeoff.mp3',
    id: newTrackId()
  }
];
