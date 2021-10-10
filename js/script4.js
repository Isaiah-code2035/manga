const arrayImage = [
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_1.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_2.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_3.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_4.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_5.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_6.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_7.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_8.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_9.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_10.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_11.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_4/one_piece_4_12.jpg'




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