import { getImage } from "./js/pixabay-api"
import { renderImages } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { card } from "./js/render-functions";
export const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
export const hideLoader = () => {
// loader.style.display = "none";
};

const form = document.querySelector(".search-form");
const preloader = document.querySelector(".loader");

form.addEventListener("submit", sendForm);

// loader.style.display = "none";

// const showLoader = () => {
//   loader.style.display = "flex";
// };

function sendForm(event) {
  event.preventDefault();
  card.innerHTML = "Pfuheprf";
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
    hideLoader();
    iziToast.show({
      message: 'Please complete the field!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
  };
};


