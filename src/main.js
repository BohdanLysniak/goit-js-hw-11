import { getImage } from "./js/pixabay-api"
import { renderImages } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import 


const form = document.querySelector(".search-form");

form.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  const inputValue = event.target.elements.search.value.trim();
  
  if (inputValue !== "") {
    getImage(inputValue).then((images) => {
      renderImages(images.hits);
    })
  } else {
    iziToast.show({
      message: 'Please complete the field!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
  };
};

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250 });
