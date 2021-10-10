const arrayImage = [
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_1.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_2.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_3.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_4.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_5.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_6.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_7.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_8.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_9.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_10.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_11.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_12.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_13.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_3/one_piece_3_14.jpg'




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