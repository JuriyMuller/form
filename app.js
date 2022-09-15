(function () {
  let realEstate = document.querySelector(".real-estate__content"),
    transport = document.querySelector(".transport__content"),
    electronics = document.querySelector(".electronics__content");

  let realEstateContent = document.querySelector(".real-estate"),
    transportContent = document.querySelector(".transport"),
    electronicsContent = document.querySelector(".electronics"),
    categorie = document.querySelector(".categorie");

  //категории
  categorie.addEventListener("click", () => {
    transport.classList.remove("active");
    electronics.classList.remove("active");
    realEstate.classList.remove("active");
  });

  realEstateContent.addEventListener("click", () => {
    realEstate.classList.add("active");

    transport.classList.remove("active");
    electronics.classList.remove("active");
  });
  transportContent.addEventListener("click", () => {
    transport.classList.add("active");

    realEstate.classList.remove("active");
    electronics.classList.remove("active");
  });

  electronicsContent.addEventListener("click", () => {
    electronics.classList.add("active");

    realEstate.classList.remove("active");
    transport.classList.remove("active");
  });

  let checkbox = document.querySelector(".comments_item"),
    desc = document.querySelector(".desc");

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      desc.disabled = 0;
    } else {
      desc.disabled = 1;
    }
  });

  //всплывающее окно
  let popUpWindow = document.querySelector(".properties-window");
  let properties = document
    .querySelector(".properties")
    .addEventListener("click", () => {
      popUpWindow.classList.add("active");
    });
  let save = document
      .querySelector(".properties-window__btn")
      .addEventListener("click", close),
    closeWindow = document
      .querySelector(".close-window")
      .addEventListener("click", close);
  function close() {
    popUpWindow.classList.remove("active");
  }
  let stateButtons = document
    .querySelector(".state__buttons")
    .addEventListener("click", (e) => {
      if (e.target.classList == "state__btn") {
        e.target.classList.add("active-btn");
      } else {
        e.target.classList.remove("active-btn");
      }
    });
})();
