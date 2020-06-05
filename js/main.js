$(".hiddenMenu").click(function () {
  $(".navbar__items").toggleClass("clicked2");
  $(".navbar__container").toggleClass("clicked3");
  $("body").toggleClass("scrollLock");
});

$(".bar").click(function () {
  $(".menu__nav").toggleClass("clicked");
  if (this.textContent == "View Menu") {
    this.textContent = "Close Menu";
  } else {
    this.textContent = "View Menu";
  }
});
