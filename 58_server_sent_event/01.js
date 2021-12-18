if (typeof EventSource !== 'undefined') {
  var source = new EventSource('sse_generator.js');
  source.onmessage = function (event) {
    document.getElementById('output').innerHTML += event.data + '<br>';
  };
}
