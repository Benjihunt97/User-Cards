const data = [
  {
    img: 'img1.jpg',
    name: 'Alice Smith',
    projects: 14,
    prototypes: 7,
  },
  {
    img: 'img2.jpg',
    name: 'Bob Johnson',
    projects: 8,
    prototypes: 16,
  },
  {
    img: 'img3.jpg',
    name: 'Charlie Davis',
    projects: 5,
    prototypes: 13,
  },
  {
    img: 'img4.jpg',
    name: 'Diana Evans',
    projects: 12,
    prototypes: 2,
  },
  {
    img: 'img5.jpg',
    name: 'Ethan Brown',
    projects: 19,
    prototypes: 4,
  },
  {
    img: 'img6.jpg',
    name: 'Fiona Harris',
    projects: 11,
    prototypes: 9,
  },
  {
    img: 'img7.jpg',
    name: 'George Clark',
    projects: 7,
    prototypes: 14,
  },
  {
    img: 'img8.jpg',
    name: 'Hannah Lewis',
    projects: 3,
    prototypes: 18,
  },
  {
    img: 'img9.jpg',
    name: 'Ian Walker',
    projects: 6,
    prototypes: 11,
  },
  {
    img: 'img10.jpg',
    name: 'Jane Hall',
    projects: 15,
    prototypes: 3,
  },
  {
    img: 'img11.jpg',
    name: 'Kyle Young',
    projects: 9,
    prototypes: 12,
  },
  {
    img: 'img12.jpg',
    name: 'Laura Scott',
    projects: 2,
    prototypes: 19,
  },
  {
    img: 'img13.jpg',
    name: 'Michael King',
    projects: 16,
    prototypes: 8,
  },
  {
    img: 'img14.jpg',
    name: 'Nina Adams',
    projects: 4,
    prototypes: 15,
  },
  {
    img: 'img15.jpg',
    name: 'Oliver Baker',
    projects: 10,
    prototypes: 6,
  },
  {
    img: 'img16.jpg',
    name: 'Paula Carter',
    projects: 18,
    prototypes: 5,
  },
  {
    img: 'img17.jpg',
    name: 'Quentin Morris',
    projects: 13,
    prototypes: 10,
  },
  {
    img: 'img18.jpg',
    name: 'Rachel Rivera',
    projects: 1,
    prototypes: 17,
  },
  {
    img: 'img19.jpg',
    name: 'Steven Cooper',
    projects: 20,
    prototypes: 1,
  },
  {
    img: 'img20.jpg',
    name: 'Tina Foster',
    projects: 17,
    prototypes: 20,
  },
];

let currentIndex = 0;
const itemsPerPage = 5;

const displayCards = (numItems) => {
  const list = document.getElementById('list');
  
  // Append new items without clearing the previous ones
  for (let i = currentIndex; i < currentIndex + numItems && i < data.length; i++) {
    const item = data[i];
    const card = document.createElement('div');
    card.className = 'rounded shadow-lg overflow-hidden';
    card.innerHTML = `
      <div class="p-5 bg-white">
        <img class="rounded-full object-cover mx-auto w-16 h-16 mb-2" src="${item.img}" alt="">
        <h3 class="font-bold text-center">${item.name}</h3>
      </div>
      <div class="flex items-center justify-evenly p-5 bg-gray-200 text-sm">
        <p class="grid place-items-center">
          <span>${item.projects}</span>
          <span>Projects</span>
        </p>
        <p class="grid place-items-center">
          <span>${item.prototypes}</span>
          <span>Prototypes</span>
        </p>
      </div>
    `;
    list.appendChild(card);
  }
  
  currentIndex += numItems;

  // Hide the button if all items are displayed
  if (currentIndex >= data.length) {
    document.getElementById('show-more').style.display = 'none';
  }
}

document.getElementById('show-more').addEventListener('click', () => {
  displayCards(itemsPerPage);
});

// Initial display of cards
displayCards(itemsPerPage);
