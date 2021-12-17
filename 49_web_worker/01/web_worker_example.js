// Merit
// 1. js is single thread
// 2. asking multi thread executionms

// create a worker
if (typeof w == 'undefined') {
  // pass code to run
  w = new Worker('counter.js');
}

// receive message and show the data
w.onmessage = function (event) {
  document.getElementById('message').innerHTML = event.data;
};
