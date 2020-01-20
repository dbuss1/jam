import { newTrackId } from './helpers';

export const PLAYER_STATUSES = {
  PLAYING: 'playing',
  PAUSED: 'paused'
};

export const INITIAL_TRACKS = [
  {
    title: 'Smooth',
    artist: 'Dylonious',
    url: '/track1.mp3',
    id: newTrackId()
  },
  {
    title: 'A Journey With Good Intentions',
    artist: 'Dylonious',
    url: '/track2.mp3',
    id: newTrackId()
  }
];
