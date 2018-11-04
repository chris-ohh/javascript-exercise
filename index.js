window.onload = function () {
  var okayClick = function () {
    console.log('okay clicked');
  };

  var itemClick = function () {
    console.log('list item clicked');

  };

  var list = document.querySelector(".list");
  var okayButton = document.querySelector(".okay");
  okayButton.onclick = okayClick;

  for(var i = 1; i <= 100; i++) {
    var item = document.createElement('li');
    item.onclick = itemClick;
    item.appendChild(document.createTextNode(i));
    list.appendChild(item);
  }
};
