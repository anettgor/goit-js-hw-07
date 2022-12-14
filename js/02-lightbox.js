import { galleryItems } from "./gallery-items.js";

// Change code below this line
const gallery = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  // const newLi = document.createElement("li");
  // gallery.appendChild(newLi);
  // newLi.classList.add("gallery__item");

  const link = document.createElement("a");
  gallery.appendChild(link);
  link.classList.add("gallery__item");
  link.href = galleryItem.original;

  const newImg = document.createElement("img");
  newImg.classList.add("gallery__image");
  newImg.setAttribute("src", galleryItem.preview);
  newImg.setAttribute("alt", galleryItem.description);
  link.appendChild(newImg);
});

var lightbox = new SimpleLightbox(".gallery a", {
  //   captionSelector: "a",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,

  /* options */
});

console.log(gallery);
