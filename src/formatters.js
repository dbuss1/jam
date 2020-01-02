export function timeString(timeInSeconds) {
  if(!isNaN(timeInSeconds)) {
    return Math.floor(timeInSeconds / 60) + ':' + ('0' + Math.floor(timeInSeconds % 60)).slice(-2)
  }
}
