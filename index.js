$('.carousel .carousel-item').each(function () {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i = 0; i < minPerSlide; i++) { next=next.next(); if (!next.length) { next=$(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); } });

// Get modal and overlay elements
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const modalImage = document.getElementById("modalImage");

// Function to open the modal
function openModal(slideNumber) {
    modalImage.src = `/carousel-image/image${slideNumber}.jpg`;
    modal.style.display = "block";
    overlay.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
    modalImage.src = "";
}
