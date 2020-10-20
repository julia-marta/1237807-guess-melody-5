const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `http://www.mobzvonok.net/mp3/Zemfira/progulka%201.mp3`,
      genre: `rock`,
    }, {
      src: `http://www.mobzvonok.net/mp3/Zemfira/sigarety.mp3`,
      genre: `blues`,
    }, {
      src: `http://www.mobzvonok.net/mp3/Zemfira/rassvety%201.mp3`,
      genre: `jazz`,
    }, {
      src: `http://www.mobzvonok.net/mp3/Zemfira/romashki%201.mp3`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `http://www.mobzvonok.net/mp3/Zemfira/v%20metro.mp3`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`,
    }],
  }
];
