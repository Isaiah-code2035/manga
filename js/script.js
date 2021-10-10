const arrayImage = [
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_1.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_2.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_3.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_4.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_5.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_6.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_7.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_8.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_9.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_10.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_11.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_12.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_13.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_14.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_15.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_16.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_17.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_18.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_19.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_20.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_21.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_22.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_23.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_24.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_25.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_26.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_27.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_28.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_29.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_30.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_31.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_32.jpg',
]





window.addEventListener('keydown', e => {
    console.log(e)
    if (e.keyCode === 37) {
        plusSlides(-1);
    }
    if (e.keyCode === 39) {
        plusSlides(1)
    }

    if (e.keyCode === 27) {
        document.write("Thank you for Reading, see you soon")
    }
})


var slideIndex = 1;

showSlides(slideIndex);




function plusSlides(n) {

    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    var i;
    var slides = document.getElementsByClassName("container-xl")

    if (n > slides.length) {
        slideIndex = 1;

    }

    if (n < 1) {
        slideIndex = slides.length

    }

    for (i = 0; i < slides.length; i++) {
        console.log(slides[i]);
        if (slides[i].hasChildNodes()) {
            slides[i].removeChild(slides[i].firstChild)
            slides[i].style.display = "none";
        }

    }
    let img = document.createElement('img');
    img.src =
        arrayImage[slideIndex - 1];
    slides[slideIndex - 1].appendChild(img);

    slides[slideIndex - 1].style.display = "block";
}