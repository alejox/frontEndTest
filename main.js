/*--------------------API-------------------------*/

const url = 'https://picsum.photos/v2/list?page=2&limit=4'

fetch(url)
  .then(res => res.json())
  .then(data => viewData(data))
  .catch(err => console.log(err));

const viewData = (data) => {
  let body = '';
  data.forEach(element => {
    body +=
      `<div class="swiper-slide">
    <img src='${element.download_url}'/>
        </div>`
  });

  document.getElementById('element').innerHTML = body
}


/*------------------------Slider----------------------*/

const swiper = new Swiper('.swiper', {


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/* ---------------Like Button ---------------- */

const likeBtn = () => {
  let heart = document.querySelector('.heart');
  let likes = document.querySelector('.like');


  if (heart.src.match('/assets/img/heart-blank.svg')) {
    heart.src = "/assets/img/heart.svg";
    likes.innerHTML = '3,501 likes';

  } else {
    heart.src = "/assets/img/heart-blank.svg";
    likes.innerHTML = '3,500 likes';
  }
}

document.querySelector('.heart').addEventListener("click", function () {
  this.style.transform = "scale(1.2)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 500)
});

/*----------------------------Post------------------------*/


function write() {
  const input = document.getElementById('create-post')
  const value = input.value;
  const resultP = document.getElementById('newComment');
  resultP.innerHTML += `<b>Comment</b> ${value}`
}

const btn = document.getElementById('btn').addEventListener('click' , write);


