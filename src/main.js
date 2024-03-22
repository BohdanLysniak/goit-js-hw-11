import { getImage } from "./js/pixabay-api"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".search-form")

form.addEventListener("submit", sendForm);

function sendForm(event) {
  console.log(event);
  event.preventDefault();
  const inputValue = event.target.elements.search.value.trim();
  if (inputValue !== "") {
    getImage(inputValue);
  } else {
    iziToast.show({
      message: 'Please complete the field!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    })
  };
}
