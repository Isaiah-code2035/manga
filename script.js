// // // let image1 = new Image()
// // // image1.src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_2.jpg'
// // // document.getElementById('cont').appendChild(image1);

// // let image2 = new Image()
// // image2.src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_4.jpg'
// // document.getElementById('cont').appendChild(image2);

// // let image3 = new Image()
// // image3.src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_5.jpg'
// // document.getElementById('cont').appendChild(image3)

// // let image4 = new Image()
// // image4.src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_6.jpg'
// // document.getElementById('cont').appendChild(image4)

// // let images5 = new Image()
// // images5.src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_7.jpg'
// // document.getElementById('cont').appendChild(images5)

// // let image6 = new Image()
// // image6.src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_10.jpg'
// // document.getElementById('cont').appendChild(image6)

// // let images7 = new Image()
// // images7.src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_8.jpg'
// // document.getElementById('cont').appendChild(images7)

// // let images8 = new Image()
// // images8.src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_9.jpg'
// // document.getElementById('cont').appendChild(images8)

// // let images9 = new Image()
// // images9.src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_11.jpg'
// // document.getElementById('cont').appendChild(images9)

// // let images10 = new Image()
// // images10.src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_12.jpg'
// // document.getElementById('cont').appendChild(images10)

// // let images11 = new Image()
// // images11.src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_13.jpg'
// // document.getElementById('cont').appendChild(images11)

const arrayImage = [
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_4.jpg',
    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_7.jpg',

    'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_10.jpg'

]



// var arrayImage = new Image();
// document.getElementById('loadImages').appendChild(arrayImage);

// arrayImage[0] = new Image();
// arrayImage[0].src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_4.jpg';

// arrayImage[1] = new Image();
// arrayImage[1].src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_7.jpg';

// arrayImage[2] = new Image()
// arrayImage[2].src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_10.jpg';


// arrayImage[3] = new Image()
// arrayImage[3].src = 'https://images.mangafreak.net/mangas/one_piece/one_piece_1/one_piece_1_8.jpg';

let n = 1;

window.addEventListener('keydown', e => {
    console.log(e)
    if (e.keyCode === 37 || e.keyCode === 39) {
        plusSlides(n);
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
    var slides = document.getElementsByClassName("mySlides")

    if (n > arrayImage.length) {
        slideIndex = 1

    }

    if (n < 1) {
        slideIndex = arrayImage.length

    }
    for (i = 0; i < arrayImage.length; i++) {

        slides[i].removeChild(slides.firstChild);
        slides[i].style.display = "none";
    }
    let img = document.createElement('img');
    img.src =
        arrayImage[slideIndex - 1];
    slides[slideIndex - 1].appendChild(img);

    slides[slideIndex - 1].style.display = "block";
}