const arrayImage = [
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_1.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_2.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_3.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_3.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_4.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_5.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_6.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_7.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_8.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_9.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_10.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_11.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_12.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_13.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_14.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_15.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_16.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_17.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_18.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_19.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_20.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_21.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_22.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_2/one_piece_2_23.jpg',

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