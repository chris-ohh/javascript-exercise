window.onload = function () {
  var loadClick = function () {
    clickedValue = 0;

    var list = document.createElement('ul');

    for(var i = 1; i <= 100; i++) {
      var item = document.createElement('li');
      item.value = i;
      item.addEventListener('click', itemClick, false);
      item.appendChild(document.createTextNode(item.value));
      list.appendChild(item);
    }

    document.body.insertBefore(list, okayButton);
  };

  var itemClick = function ( event ) {
    clickedValue = event.target.value;

    console.log('you clicked ' + clickedValue);
  };

  var okayClick = function () {
    switch (clickedValue) {
      case -1: {
        console.log('click load');
        break;
      }

      case 0: {
        console.log('click a list item');
      }

      default: {
        console.log( clickedValue + ' loaded');
        break;
      }
    }
  };

  var loadButton = document.querySelector(".load");
  var okayButton = document.querySelector(".okay");
  var clickedValue = -1;

  loadButton.addEventListener('click', loadClick, false);
  okayButton.addEventListener('click', okayClick, false);

};
