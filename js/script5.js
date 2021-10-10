const arrayImage = [
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_1.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_2.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_3.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_4.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_5.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_6.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_7.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_8.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_9.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_10.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_11.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_12.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_13.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_14.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_15.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_16.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_17.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_18.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_19.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_20.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_5/one_piece_5_21.jpg'

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