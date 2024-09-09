const bannerContent = document.querySelector('.banner-content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


const images = bannerContent.querySelectorAll('img');
let currentIndex = 0;


function updateBanner(index) {
    
    images.forEach((img, i) => {
        img.style.display = 'none';
    });

    
    images[index].style.display = 'block';
}


function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBanner(currentIndex);
}


function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBanner(currentIndex);
}


nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);


let autoSlideInterval = setInterval(nextImage, 5000); 


bannerContent.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
bannerContent.addEventListener('mouseout', () => autoSlideInterval = setInterval(nextImage, 5000));


updateBanner(currentIndex);
