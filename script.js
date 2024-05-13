const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// 버튼
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// 카운터
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// 버튼 이벤트 리스너
nextBtn.addEventListener('click', () => {
	if (counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
	counter++;
	carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
	if (counter <= 0) return;
	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
	counter--;
	carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener('transitionend', () => {
	if (carouselImages[counter].id === 'lastClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = `translateX(${-size * counter}px)`;
	}
	if (carouselImages[counter].id === 'firstClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = `translateX(${-size * counter}px)`;
	}
});
