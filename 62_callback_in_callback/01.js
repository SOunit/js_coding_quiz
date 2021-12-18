loadScript('/script1.js', function (script) {
  console.log('first script is loaded');

  loadScript('/script2.js', function (script) {
    console.log('second script is loaded');

    loadScript('/script3.js', function (script) {
      console.log('third script is loaded');
      // after all scripts are loaded
    });
  });
});
