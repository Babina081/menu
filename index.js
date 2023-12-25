var menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 1234,
    img: 'images/breakfast1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 1234,
    img: 'images/breakfast1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 3,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 1234,
    img: 'images/breakfast1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 4,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 1234,
    img: 'images/breakfast1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 5,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 1234,
    img: 'images/breakfast1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 5,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 1234,
    img: 'images/breakfast1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 6,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 1234,
    img: 'images/breakfast1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 7,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 1234,
    img: 'images/breakfast1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 8,
    title: 'buttermilk pancakes',
    category: 'shake',
    price: 1234,
    img: 'images/breakfast1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 9,
    title: 'buttermilk pancakes',
    category: 'lunch',
    price: 1234,
    img: 'images/breakfast1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 10,
    title: 'buttermilk pancakes',
    category: 'dinner',
    price: 1234,
    img: 'images/breakfast1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
];

var sectionCenter = document.querySelector('.sectionCenter');
var btnContainer = document.querySelector('.btnContainer');

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  var displayMenu = menuItems.map(function (item) {
    return `<article class="menuItem">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="itemInfo">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">Rs ${item.price}</h4>
            </header>
            <p class="itemText">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join('');

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  var categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );

  var categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filterBtn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join('');

  btnContainer.innerHTML = categoryBtns;

  var filterBtns = btnContainer.querySelectorAll('.filterBtn');
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var category = e.currentTarget.dataset.id;
      var menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
