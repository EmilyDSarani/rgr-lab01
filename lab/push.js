const getArtist = () => {
  const artists = ['beyonce', 'pink'];
  const newArr = artists.push('taylor');
  return newArr[0];

};

module.exports = getArtist;
