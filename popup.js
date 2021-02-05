const startTimer = () => {
  // const pomoTime = 1;
  alert('Timer Started');
  // Initialize alarm using Chrome API 
  chrome.alarms.create('pomodoro expired', pomoTime);


}



// const endTime = () => {
//   alert('Timer Ended');
// }

document.querySelector('button').addEventListener('click', startTimer);

// chrome.alarms.onAlarm.addListener(endTime);
