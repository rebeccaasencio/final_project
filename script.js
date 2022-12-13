var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});

let popupContainerElement = document.getElementById("popupContainer");

let comments = ["𝗯𝗿𝗮𝘃𝗲 𝗛𝗲𝟴𝗿𝘁 2 months ago \njdebfubwdndwbefijdbsjdsbfew UPLOAD IP IP", "𝗞𝗶𝗱𝘀 𝗦𝘂𝗽𝗲𝗿𝗵𝗲𝗿𝗲𝗼𝘀 𝗥𝗲𝗮𝗹 𝗟𝗶𝗳𝗲 𝗩𝗶𝗱𝗲𝗼𝘀 1 hour ago\nAm is kid a i love is ", "𝗞𝗶𝗱𝗟𝘃𝗥 5 months ago\n anyone ages 5-10???", "𝗯𝗮𝟴𝗲𝘀𝟲𝟵 30 secs ago \nBANANA MINION DRINK PISS!!(SHOCKING) CLICK ME!!http://virus.download", "𝗕𝗿𝗶𝗮𝗻 𝗦. 1 yr ago \nuuwhedidhebfebsjnewvfgwevfud", "𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹𝗹_𝗛𝗕𝗢_𝗿𝗲𝗮𝗹 5 days ago \nWE HAVE GIFTS FOR YOU!!! https://google.docs.euwuebfdaksj", "𝗔𝗹𝗲𝘅𝗮 𝗠. 1 day ago\n ewfwebfwqydqk", "𝗶𝗛𝗮𝗿𝘁𝗞𝗶𝗱$𝟴𝟴 10 secs ago \nwanna come over?", "𝗶𝗻𝗰𝗼𝗴𝗻𝗶𝘁𝗼_𝟬𝟯 30 secs ago \ns͓̽p͓̽a͓̽m͓̽ ͓̽l͓̽o͓̽l͓̽o͓̽o͓̽l͓̽o͓̽l͓̽o͓̽l͓̽o͓̽l͓̽o͓̽o͓̽l͓̽ ͓̽d͓̽u͓̽f͓̽y͓̽g͓̽q͓̽f͓̽n͓̽a͓̽"];

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
