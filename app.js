
document.getElementById('search-button').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    const dates = document.getElementById('dates').value;
  
    if (location && dates) {
      alert(`Searching for location: ${location} for ${dates}`);
    } else {
      alert('Please fill in both fields.');
    }
  });
  // 
  console.clear();

gsap.registerPlugin(Draggable, InertiaPlugin);

const cardsContainer = document.querySelector(".cards");
const cards = gsap.utils.toArray(".card");
const snapPoints = cards.map((card, i) => -(card.clientWidth + 50) * i);
const mySnap = gsap.utils.snap(snapPoints);

window.addEventListener("load", () => {
  Draggable.create(cardsContainer, {
    type: "x",
    bounds: {
      maxX: 0,
      minX: window.innerWidth - cardsContainer.scrollWidth - 50
    },
    onDrag: function () {
      direction = this.deltaX;
    },
    inertia: true,
    snap: {
      x: function (v) {
        return mySnap(v);
      }
    }
  });
});


  const carousel = document.getElementById('carousel');
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');

  // Установим ширину прокрутки на половину ширины карточки
  const scrollAmount = document.querySelector('.flex-shrink-0').offsetWidth / 2;

  nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

