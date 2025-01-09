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