

export const gameTime = (time) => {
  let seconds = (Math.floor(time / 100) <= 9) ? "0" + Math.floor(time / 100) : Math.floor(time / 100);
  let centiseconds = (Math.floor(time % 100) <= 9) ? "0" + Math.floor(time % 100) : Math.floor(time % 100);

  return {seconds, centiseconds};
}
