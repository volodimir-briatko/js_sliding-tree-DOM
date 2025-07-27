'use strict';

// write code here
document.querySelectorAll('.tree > li').forEach(function (element) {
  if (element.querySelector('ul')) {
    const ul1 = element.querySelector('ul').outerHTML;

    element.querySelector('ul').remove();

    element.innerHTML =
      '<span class="click-trigger">' +
      element.textContent.trim() +
      '</span>' +
      ul1;
  } else {
    element.innerHTML =
      '<span class="click-trigger">' + element.textContent.trim() + '</span>';
  }

  element.querySelectorAll('ul > li').forEach(function (element2) {
    if (element2.querySelector('ul')) {
      const ul2 = element2.querySelector('ul').outerHTML;

      element2.querySelector('ul').remove();

      element2.innerHTML =
        '<span class="click-trigger">' +
        element2.textContent.trim() +
        '</span>' +
        ul2;
    } else {
      element2.innerHTML =
        '<span class="click-trigger">' +
        element2.textContent.trim() +
        '</span>';
    }
  });
});

document.querySelectorAll('.click-trigger').forEach(function (element) {
  element.addEventListener('click', function () {
    if (element.parentNode.querySelector('ul')) {
      if (element.parentNode.querySelector('ul').style.display === 'none') {
        element.parentNode.querySelector('ul').style.display = 'block';
      } else {
        element.parentNode.querySelector('ul').style.display = 'none';
      }
    }
  });
});

