document.addEventListener('DOMContentLoaded', (event) => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingMessage = document.getElementById('loading-message');
    const box = document.getElementById('box');
    const boxShadow = document.getElementById('box-shadow');

    let messageTimeout = setTimeout(() => {
      loadingMessage.classList.remove('hidden');
    }, 3000);

    window.addEventListener('load', () => {
      clearTimeout(messageTimeout);
      box.classList.add('hide');
      box.classList.remove('box');
      loadingScreen.classList.add('shadowHide')
      boxShadow.classList.add('shadowHide');
      setTimeout(() => {
        box.classList.add('block-loading')
        loadingScreen.classList.add('block-loading')
        boxShadow.classList.add('block-loading')
      }, 1000)
    });
});

const topButtonContainer = document.getElementById('top-button-container');

function toggleTopButton() {
    if (window.scrollY > 20) {
        topButtonContainer.style.display = 'block';
    } else {
        topButtonContainer.style.display = "none";
    }
}

window.addEventListener('scroll', toggleTopButton);

function scrollToTop() {
    console.log('Scroll to top button clicked');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

toggleTopButton();


const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdownToggle.addEventListener('click', function () {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function (event) {
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});