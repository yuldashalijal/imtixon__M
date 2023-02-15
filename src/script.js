"use strict";



//!___1-carusel

let list = document.querySelector(".carusel-img"),
    frame_img = document.querySelectorAll(".Frame"),
    left = document.querySelector("#left"),
    right = document.querySelector("#right");

let index = 0

function slider() {
    if (index > frame_img.length-1) {
        index = 0;
    }
    if (index < 0) {
        index = frame_img.length-1;
    }


    list.style.transform = `translateX(${-index * 1230}px)`;
}

let play = setInterval(() => {
    index++;
    slider()
}, 5000)

right.addEventListener('click', () => {
    index++
    slider()
    clearInterval(play)
    
})
left.addEventListener("click", () => {
    index--;
    slider()
    clearInterval(play);
});



//!___2-carusel

let list_2 = document.querySelector(".carusel-img-2"),
  frame_img_2 = document.querySelectorAll(".Frame-2"),
  left_2 = document.querySelector("#left-2"),
    right_2 = document.querySelector("#right-2");
  
let index2 = 0;

function slid() {
  if (index2 > frame_img_2.length - 1) {
    index2 = 0;
  }
  if (index2 < 0) {
    index2 = frame_img_2.length - 1;
  }

  list_2.style.transform = `translateX(${-index2 * 1230}px)`;
}

let play2 = setInterval(() => {
  index2++;
  slid();
}, 5000);

right_2.addEventListener("click", () => {
  index2++;
  slid();
  clearInterval(play2);
});
left_2.addEventListener("click", () => {
  index2--;
  slid();
  clearInterval(play2);
});



//!____3-carusel

let list_3 = document.querySelector(".carusel-img-3"),
  frame_img_3 = document.querySelectorAll(".Frame-3"),
  left_3 = document.querySelector("#left-3"),
  right_3 = document.querySelector("#right-3");

let index3 = 0;

function slid2() {
  if (index3 > frame_img_3.length - 1) {
    index3 = 0;
  }
  if (index3 < 0) {
    index3 = frame_img_3.length - 1;
  }

  list_3.style.transform = `translateX(${-index3 * 1230}px)`;
}

let play3 = setInterval(() => {
  index3++;
  slid2();
}, 5000);

right_3.addEventListener("click", () => {
  index3++;
  slid2();
  clearInterval(play3);
});
left_3.addEventListener("click", () => {
  index3--;
  slid2();
  clearInterval(play3);
});