import { newTrackId } from './helpers';

export const PLAYER_STATUSES = {
  PLAYING: 'playing',
  PAUSED: 'paused'
};

export const INITIAL_TRACKS = [
  {
    title: 'Primavera',
    artist: 'Dylonious',
    url: `${process.env.ASSET_PREFIX}/Primavera.mp3`,
    id: newTrackId()
  },
  {
    title: "Cruis'n the Metaverse",
    artist: 'Dylonious',
    url: `${process.env.ASSET_PREFIX}/Cruisn.mp3`,
    id: newTrackId()
  },
  {
    title: 'Takeoff',
    artist: 'Dylonious',
    url: `${process.env.ASSET_PREFIX}/Takeoff.mp3`,
    id: newTrackId()
  }
];
