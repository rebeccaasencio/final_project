var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});

let popupContainerElement = document.getElementById("popupContainer");

let comments = ["ð¯ð¿ð®ðð² ðð²ð´ð¿ð 2 months ago \njdebfubwdndwbefijdbsjdsbfew UPLOAD IP IP", "ðð¶ð±ð ð¦ðð½ð²ð¿ðµð²ð¿ð²ð¼ð ð¥ð²ð®ð¹ ðð¶ð³ð² ð©ð¶ð±ð²ð¼ð 1 hour ago\nAm is kid a i love is ", "ðð¶ð±ððð¥ 5 months ago\n anyone ages 5-10???", "ð¯ð®ð´ð²ðð²ðµ 30 secs ago \nBANANA MINION DRINK PISS!!(SHOCKING) CLICK ME!!http://virus.download", "ðð¿ð¶ð®ð» ð¦. 1 yr ago \nuuwhedidhebfebsjnewvfgwevfud", "ð¢ð³ð³ð¶ð°ð¶ð®ð¹ð¹_ððð¢_ð¿ð²ð®ð¹ 5 days ago \nWE HAVE GIFTS FOR YOU!!! https://google.docs.euwuebfdaksj", "ðð¹ð²ðð® ð . 1 day ago\n ewfwebfwqydqk", "ð¶ðð®ð¿ððð¶ð±$ð´ð´ 10 secs ago \nwanna come over?", "ð¶ð»ð°ð¼ð´ð»ð¶ðð¼_ð¬ð¯ 30 secs ago \nsÌ½ÍpÌ½ÍaÌ½ÍmÌ½Í Ì½ÍlÌ½ÍoÌ½ÍlÌ½ÍoÌ½ÍoÌ½ÍlÌ½ÍoÌ½ÍlÌ½ÍoÌ½ÍlÌ½ÍoÌ½ÍlÌ½ÍoÌ½ÍoÌ½ÍlÌ½Í Ì½ÍdÌ½ÍuÌ½ÍfÌ½ÍyÌ½ÍgÌ½ÍqÌ½ÍfÌ½ÍnÌ½ÍaÌ½Í", "ðð¶ð´ð@ð±ð±ð¶ð²ðµð°ð®ð¬ 2 minutes ago \n heyyy what's up?"];

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
