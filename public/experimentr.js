experimentr = function() {
  var experimentr = {
    version: "0.0.1"
  };

  var sequence;
  var current;
  var mainDiv, moduleDiv, controlDiv;

  experimentr.start = function() {
    init();
    current = 0;
    activate(current);
  };

  function init() {
    if(mainDiv) return;
    mainDiv = d3.select('body').append('div')
      .attr('id', 'experimentr');
    moduleDiv = mainDiv.append('div')
      .attr('id', 'module');
    controlDiv = mainDiv.append('div')
      .attr('id', 'control');
    controlDiv.append('button')
      .attr('type', 'button')
      .text('Next')
      .on('click', experimentr.next);
  }

  experimentr.next = function() {
    current = current + 1;
    activate(current);
  }

  function clearModule() {
    d3.select('#module').html('');
  }

  function activate(x) {
    clearModule();

    // TODO add special case when activating the last one
    //  (change next to finished?)
    if(x === sequence.length-1)
      console.log('at the end');

   d3.html(sequence[x], function(err, d) {
     if(err) console.log(err);
     d3.select('#module').node().appendChild(d);
   });
  }

  experimentr.sequence = function(x) {
    if(!arguments.length) return sequence;
    sequence = x;
    return experimentr;
  }

  return experimentr;
}();
