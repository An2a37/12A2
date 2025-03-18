let index = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const totalSlides = slides.length;

function showSlide(n) {
    index = (n + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}%)`; /* Trượt chính xác */
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}
document.querySelectorAll(".slider-container").forEach((container) => {
    container.dataset.index = 0; // Mỗi slider có một index riêng

    const slider = container.querySelector(".slider");
    const slides = container.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(n) {
        let index = Number(container.dataset.index); // Lấy index của slider hiện tại
        index = (n + totalSlides) % totalSlides;
        container.dataset.index = index; // Cập nhật index vào dataset
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    container.querySelector(".next").addEventListener("click", () => {
        showSlide(Number(container.dataset.index) + 1);
    });

    container.querySelector(".prev").addEventListener("click", () => {
        showSlide(Number(container.dataset.index) - 1);
    });
});
