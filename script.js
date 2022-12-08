var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});

let popupContainerElement = document.getElementById("popupContainer");

let comments = ["brave Heart: jdebfubwdndwbefijdbsjdsbfew UPLOAD IP IP", "Kids Superheroes Real Life Videos: Am is kid a i love is ", "KidLVr: 5-10???", "BANANA MINION DRINK PISS!!(SHOCKING) CLICK ME!!http://virus.download", "Brian S: uuwhedidhebfebsjnewvfgwevfud", "HBO: WE HAVE GIFTS FOR YOU!!! https://google.docs.euwuebfdaksj", "Alexa M: ewfwebfwqydqk"];

setInterval(function () {
  let randomCommentIndex = Math.floor(Math.random() * comments.length);
  createPopup(comments[randomCommentIndex]);
}, 2500);



function createPopup(incomingText) {

  popupContainerElement.innerHTML = "";

  let newPopupElement = document.createElement("DIV");
  newPopupElement.classList.add("popupMessage");
  newPopupElement.innerText = incomingText;

  let randomX = (Math.random()*80) + "vw";
  let randomY = (Math.random()*80) + "vh";

  newPopupElement.style.left = randomX;
  newPopupElement.style.top = randomY;


  popupContainerElement.appendChild(newPopupElement);

}
