// alert('Grrr.')
chrome.runtime.onMessage.addListener(function (request) {
  alert(request);
  // const re = new RegExp('bear', 'gi')
  // const matches = document.documentElement.innerHTML.match(re)
  // sendResponse({count: matches.length})
})



// Counting instances of Bear
// const re = new RegExp('bear', 'gi')
// const matches = document.documentElement.innerHTML.match(re) || []

// // Sending URL and total count to background.js
// chrome.runtime.sendMessage({
//   url: window.location.href,
//   count: matches.length
// })