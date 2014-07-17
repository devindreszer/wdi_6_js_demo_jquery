var DemoApp = {
  initialize: function() {
    $('#click-me-button').click(function(event) {
      alert('You did it!');
      event.preventDefault();
    });

    $('#disorient').click(this.mirrorText);
    $('#random-color-button, .color-changing').click(this.randomizeColor);
    $('form').submit(this.addInput);
    $('#words-list').on('click', 'li', this.randomizeColor);
    $('#randomize-words-button').click(this.randomizeAll);
  },

  mirrorText: function() {
    $(this).toggleClass('mirror');
  },

  randomizeColor: function(event) {
    var newColor = Math.floor(Math.random() * 0xffffff).toString(16);
    $(this).css('color', '#' + newColor);
    if(event.preventDefault !== undefined){ event.preventDefault(); }
  },

  addInput: function(event) {
    var newWord = $('#word-field').val();

    if(newWord !== '') {
      var listItem = $('<li>').text(newWord);
      $('#words-list').append(listItem);
      $('#word-field').val('');
    }

    event.preventDefault();
  },

  randomizeAll: function(event) {
    $('#words-list li').each(DemoApp.randomizeColor);
    event.preventDefault();
  }
};

$(document).ready(function(){ DemoApp.initialize(); });
