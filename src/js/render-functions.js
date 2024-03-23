import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const card = document.querySelector(".gallery");

export function renderImages(arr) {
  if (arr.length === 0) {
    iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
  } else {
    const markup = arr.map((image) => {
      return `<a class="photos-list-link" href="${image.largeImageURL}">
  <img class="photo" src="${image.webformatURL}" alt="${image.tags}"/>
  </a>
  <ul class="photo-information-container">
  <li class="item-photo-information-container"><p><span class="accent">Likes</span>${image.likes}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Views</span>${image.views}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Comments</span>${image.comments}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Downloads</span>${image.downloads}</p></li>
  </ul>
  </li>`;
    })
      .join("");
    card.insertAdjacentHTML("beforeend", markup);
  };
};