import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  const newDiv = document.createElement("div");
  gallery.appendChild(newDiv);
  newDiv.classList.add("gallery__item");

  const link = document.createElement("a");
  newDiv.appendChild(link);
  link.classList.add("gallery__link");
  link.href = galleryItem.original;

  const newImg = document.createElement("img");
  newImg.classList.add("gallery__image");
  newImg.setAttribute("src", galleryItem.preview);
  newImg.setAttribute("alt", galleryItem.description);
  link.appendChild(newImg);

  newImg.addEventListener("click", (event) => {
    event.preventDefault();

    const lightbox = basicLightbox.create(
      `
    		<img src=${galleryItem.original}>
    	`
    );

    lightbox.show(() => {
      gallery.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          lightbox.close();
        }
      });
    });
  });
});

console.log(galleryItems);
