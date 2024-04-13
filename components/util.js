const formatTime = (number) => (number <= 9 ? `0${number}` : number);
export const displayTime = (miliseconds) => {
  let minutes = 0;
  let seconds = 0;
if (miliseconds < 0) {
    miliseconds = 0;
  }
if (miliseconds < 100) {
    return `00:00,${formatTime(miliseconds)}`;
  }
let remainmiliseconds = miliseconds % 100;
  seconds = (miliseconds - remainmiliseconds) / 100;
if (seconds < 60) {
    return `00:${formatTime(seconds)},${formatTime(remainmiliseconds)}`;
  }
let remainSeconds = seconds % 60;
  minutes = (seconds - remainSeconds) / 60;
return `${formatTime(minutes)}:${formatTime(remainSeconds)},${formatTime(remainmiliseconds)}`;
};