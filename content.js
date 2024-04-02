var div = document.createElement("div");
var ruto = document.createElement("img");

var ul = document.createElement("ul");
ul.id = "yul";

document.body.appendChild(div, document.body.firstChild);
div.appendChild(ruto);

div.appendChild(ul);
ruto.src = chrome.runtime.getURL("ruto.png");

div.classList.add("buttoner");
ruto.classList.add("root");

// div.addEventListener("click", btnClick);

var images = document.getElementsByTagName("IMG");
var ul = document.getElementById("yul");
setInterval(function () {
  let element = document.querySelector(".buttoner");
  let width = element.clientWidth;
  width += 45;

  element.style.width = width + "px";

  const randomItem = funnyFees[Math.floor(Math.random() * funnyFees.length)];

  // Remove the random item from the array
  const index = funnyFees.indexOf(randomItem);
  if (index > -1) {
    funnyFees.splice(index, 1);
  }
  var li = document.createElement("li");

  // Set the text content of the list item
  li.textContent = " > " + randomItem;
  ul.appendChild(li);

  // Get the reference to the unordered list

  // alert("hello");
}, 5000);

const funnyFees = [
  "Buffering Tax",
  "Emoji Overload Fee",
  "Tiktok Dance Tariff",
  "Meme Maintenance Surcharge",
  "Social Media Addiction Penalty",
  "Bandwidth Blunder Fine",
  "Netflix Binge Tax",
  "Selfie Upload Levy",
  "Late-Night Online Shopping Fee",
  "WiFi Password Change Fee",
  "Grammar Police Fine",
  "Online Beting License Fee",
  "Clickbait Tax",
  " Gaming Surcharges",
  " Trolling Toll",
  "E-moji Express Fee",
  "Browser History Hiding Tax",
  "Virtual Reality Tax",
  "404 Error Fine",
];
