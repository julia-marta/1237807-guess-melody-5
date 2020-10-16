export const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

export const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((answer, i) => {
    return answer === (question.answers[i].genre === question.genre);
  });
};
