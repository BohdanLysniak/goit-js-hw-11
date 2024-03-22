import { getImage } from "./js/pixabay-api"
import { renderImages } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".search-form")
export const card = document.querySelector("gallery");

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
