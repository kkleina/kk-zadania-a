// zadanie 1.1

var dataEl = document.getElementById('data'),
    missingNumbersEl = document.getElementById('missing-numbers'),
    data = [2,3,7,4,9];

dataEl.innerText = data.sort().join(', ');
missingNumbersEl.innerText = missingNumbers().join(', ');

function missingNumbers() {
  var missing = [];
  for (var j = 1; j <= 10; j++) {
    if (!data.includes(j)) {
      missing.push(j);
    }
  }
  return missing;
}


// Zadanie 1.2

var inputStringEl = document.getElementById('input-string');

inputStringEl.addEventListener('blur', function() {
  inputStringEl.value = splitString(inputStringEl.value);
});

function splitString(str) {
  var spacesLength = Math.ceil((str.length - 2) / 4);

  str = str.replace(/\s/g, '').split('');
  for (var i = spacesLength - 1; i > 0; i--) {
    str.splice(4*i + 2, 0, ' ');
  }
  str.splice(2, 0, ' ');

  return str.join('');
}


// Zadanie 2

var dropdownButtonEl = document.getElementById('dropdown-button');
dropdownButtonEl.addEventListener('click', dropdownMenu);

function dropdownMenu() {
  var dropdownMenuEl = document.getElementById('dropdown-menu');
  dropdownMenuEl.classList.toggle('active');
}


// Zadanie 3

var people = [
  new Array('Jan Kowalski', '666 666 666', '25'),
  new Array('Adam Nowak', '777 777 777', '65'),
  new Array('Ewa Kowalska', '565 565 656', '32'),
  new Array('Alicja Kot', '979 985 956', '19'),
  new Array('Marek Lampa', '256 652 652', '35'),
  new Array('Edyta Motyl', '999 999 556', '44'),
  new Array('Jan Kowalski', '666 666 666', '25'),
  new Array('Adam Nowak', '777 777 777', '65'),
  new Array('Ewa Kowalska', '565 565 656', '32'),
  new Array('Alicja Kot', '979 985 956', '19'),
  new Array('Marek Lampa', '256 652 652', '35'),
  new Array('Edyta Motyl', '999 999 556', '44'),
  new Array('Jan Kowalski', '666 666 666', '25'),
  new Array('Adam Nowak', '777 777 777', '65'),
  new Array('Ewa Kowalska', '565 565 656', '32'),
  new Array('Alicja Kot', '979 985 956', '19'),
  new Array('Marek Lampa', '256 652 652', '35'),
  new Array('Edyta Motyl', '999 999 556', '44'),
  new Array('Jan Kowalski', '666 666 666', '25'),
  new Array('Adam Nowak', '777 777 777', '65'),
  new Array('Ewa Kowalska', '565 565 656', '32'),
  new Array('Alicja Kot', '979 985 956', '19'),
  new Array('Marek Lampa', '256 652 652', '35'),
  new Array('Edyta Motyl', '999 999 556', '44'),
  new Array('Jan Kowalski', '666 666 666', '25'),
  new Array('Adam Nowak', '777 777 777', '65'),
  new Array('Ewa Kowalska', '565 565 656', '32'),
  new Array('Alicja Kot', '979 985 956', '19'),
  new Array('Marek Lampa', '256 652 652', '35'),
  new Array('Edyta Motyl', '999 999 556', '44'),
  new Array('Jan Kowalski', '666 666 666', '25'),
  new Array('Adam Nowak', '777 777 777', '65'),
  new Array('Ewa Kowalska', '565 565 656', '32'),
  new Array('Alicja Kot', '979 985 956', '19'),
  new Array('Marek Lampa', '256 652 652', '35')
];

function getPeople() {
  var peopleListEl = document.getElementById('people-list');
  var tbodyEl = document.createElement('tbody');
  peopleListEl.appendChild(tbodyEl);

  for (var i = 0; i < people.length; i++) {
    var trEl = document.createElement('tr');
    trEl.classList.add('paginate');
    tbodyEl.appendChild(trEl);

    var tdLpEl = document.createElement('td');
    var lpText = document.createTextNode(i + 1);
    tdLpEl.appendChild(lpText);
    trEl.appendChild(tdLpEl);

    var tdNameEl = document.createElement('td');
    var nameText = document.createTextNode(people[i][0]);
    tdNameEl.appendChild(nameText);
    trEl.appendChild(tdNameEl);

    var tdPhoneEl = document.createElement('td');
    var phoneText = document.createTextNode(people[i][1]);
    tdPhoneEl.appendChild(phoneText);
    trEl.appendChild(tdPhoneEl);

    var tdAgeEl = document.createElement('td');
    var ageText = document.createTextNode(people[i][2]);
    tdAgeEl.appendChild(ageText);
    trEl.appendChild(tdAgeEl);
  }
}

getPeople();


// pagination

$(function() {
  var pageParts = $(".paginate");
  var numPages = pageParts.length;
  var perPage = 5;

  pageParts.slice(perPage).hide();
  $('#people-list tfoot').pagination({
    items: numPages,
    itemsOnPage: perPage,
    cssStyle: '',
    prevText: '<',
    nextText: '>',
    displayedPages: 3,
    onPageClick: function(pageNum) {
      var start = perPage * (pageNum - 1);
      var end = start + perPage;

      pageParts.hide().slice(start, end).show();
    }
  });
});
