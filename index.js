$(".carousel .carousel-item").each(function () {
  var minPerSlide = 5; // Set the desired number of cards per slide
  var next = $(this).next();

  if (!next.length) {
    next = $(this).siblings(":first");
  }

  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide - 1; i++) {
    next = next.next();

    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
// Get modal and overlay elements
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const modalImage = document.getElementById("modalImage");

// Function to open the modal
function openModal(slideNumber) {
  modalImage.src = `/carousel-image/image${slideNumber}.jpg`;
  // modalImage.style.transform = "scale(2)";
  modal.style.display = "block";
  overlay.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  modalImage.src = "";
}

// const expandButton = document.getElementById("expandButton");
// const overlay = document.getElementById("overlay");
// const closeButton = document.getElementById("closeButton");
// const expandedImage = document.getElementById("expandedImage");

// expandButton.addEventListener("click", function () {
//   overlay.classList.remove("hidden");
//   overlay.classList.add("notHidden");
//   const originalImageSrc = expandButton.getAttribute("src");
//   expandedImage.setAttribute("src", "/carousel-image/image4.jpg");
// });

// closeButton.addEventListener("click", function () {
//   overlay.classList.add("hidden");
//   overlay.classList.remove("notHidden");
// });
