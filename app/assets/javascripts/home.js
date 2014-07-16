$(document).ready(function() {
  // Code in here will run once the browser has loaded all the page HTML
  $('#click-me-button').on('click', function(){
    alert('You did it!');
  });

  $('#random-color-button').on('click', DemoApp.randomColor);
  $('.color-changing').on('click', DemoApp.randomColor);
  $('#disorient').on('click', DemoApp.mirrorElement);
  $('#color-form').on('submit', DemoApp.addNewColor);
  $('#colors-list').on('click', 'li', function(){ alert($(this).text()); });
});

// Create a "namespace" object so we only have a single global variable
var DemoApp = {
  randomColor: function(){
    var random_color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    $(this).css('color', random_color);
  },

  mirrorElement: function(){
    $(this).toggleClass('mirror');
  },

  addNewColor: function(event){
    var newColor = $('#color-field').val();

    if(newColor !== ''){
      var newItem = $('<li>').text(newColor).css('color', newColor);
      $('#colors-list').append(newItem);
      $('#color-field').val('');
    }

    event.preventDefault();
  }
};
