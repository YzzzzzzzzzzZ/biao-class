;
(function() {
  'use strict';

  var elForm = document.getElementById('search-form');
  var elInput = document.getElementById('search-input');

  init()

  function init() {
    elForm.addEvenListener('submit', function(e) {
      e.prevenDefault();
      searchUser(elInput.value);
      searchRepo(elInput.value);
    });
  }

  function searachUser(kwd) {
    send.get('https://')
  }

})()
