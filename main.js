//Api

const url = 'https://picsum.photos/v2/list?page=2&limit=3'

fetch(url)
  .then(res => res.json())
  .then(data => {

    let element = document.getElementById('element')
    element.innerHTML = `<img src='${data[0].download_url}' alt='Texto'/>`

    console.log(data);
  })
  .catch(err => console.log(err));



 // Slider 

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