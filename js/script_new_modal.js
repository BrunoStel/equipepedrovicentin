let images = document.querySelectorAll(".gallery img");
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");
let whatsappButton = document.getElementById("whatsapp-button");
let currentIndex = 0;
let imgSrc
let pageUrl
let message

function openModal(index) {
    currentIndex = index;
    modal.style.display = "flex";
    imgSrc = images[currentIndex].src;
    modalImg.src = imgSrc;
    pageUrl = window.location.href;
    message = encodeURIComponent("Olá! Gostaria de usar essa foto como referência: \n" + imgSrc + "\n\nPágina do site: \n" + pageUrl);
    whatsappButton.href = "https://wa.me/5544999369119?text=" + message;
}

function closeModal() {
    modal.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    imgSrc = images[currentIndex].src;
    modalImg.src = imgSrc;
    pageUrl = window.location.href;

    message = encodeURIComponent("Olá! Gostaria de usar essa foto como referência: \n" + imgSrc + "\n\nPágina do site: \n" + pageUrl);
    whatsappButton.href = "https://wa.me/5544999369119?text=" + message;
}
