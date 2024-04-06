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
  modal.style.display = "block"; // Changed to "block" to ensure it's visible
  overlay.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  modalImage.src = "";
}

// Add event listener to overlay to close modal when clicked
overlay.addEventListener("click", closeModal);




