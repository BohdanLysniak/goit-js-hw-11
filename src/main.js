import { getImage } from "./js/pixabay-api"
import { renderImages } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
export const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

const form = document.querySelector(".search-form");
const loader = document.querySelector(".loader");

form.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  const inputValue = event.target.elements.search.value.trim();
  
  if (inputValue !== "") {
    getImage(inputValue).then((resolve) => {
      renderImages(resolve.hits);
    }).catch((error) => {
      console.log(error);
      iziToast.error({
        message: 'Sorry, an error occurred while loading. Please try again!',
        theme: 'dark',
        progressBarColor: '#FFFFFF',
        color: '#EF4040',
        position: 'topRight',
      })
    });
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


