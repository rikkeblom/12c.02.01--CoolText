"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  // console.log("start");
  //finding the text
  const originaltext = document.querySelector(".textToAnimate").textContent;
  //delete content of the original container
  document.querySelector(".textToAnimate").textContent = "";

  //split the text up into a span for each letter
  const textarray = Array.from(originaltext);
  // console.log("TEXT ARRAY", textarray);
  textarray.forEach((letter, i) => {
    let newSpan = document.createElement("span");
    newSpan.textContent = letter;
    document.querySelector(".textToAnimate").appendChild(newSpan);
  });

  //add staggered animation
  document.querySelectorAll(".textToAnimate span").forEach((elm, i) => {
    elm.classList.add("animate");
    elm.style.animationDelay = `${i / 40}s`;
  });
}
