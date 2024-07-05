/// <reference types="../@types/jquery" />

// navbar color change

let sectionOffset = $("#about").offset().top;
let navBar = $(".navbar");
$(window).on("scroll", function () {
  let currentScroll = $(window).scrollTop();
  if (currentScroll > sectionOffset - navBar.outerHeight(true)) {
    navBar.css("backgroundColor", "rgba(50,0,0)");
  } else {
    navBar.css("backgroundColor", "transparent");
  }
});

// loading screen
$(function () {
  $(".loader").fadeOut(1000, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});

// Smoth scroll screen
$('a[href^="#"]').on("click", function (e) {
  let Herf = e.target.getAttribute("href");
  let sectionOffset = $(Herf).offset().top;
  $("body,html").animate({ scrollTop: sectionOffset }, 1000);
});

// side bar
$("aside").on("click", function () {
  $(".outerside").animate({ width: "toggle" }, 1000);
});
$(".color-box").on("click", function (e) {
  let currentColor = $(e.target).css("backgroundColor");
  $("h2,h3,p,a,span").css("color", currentColor);
});
