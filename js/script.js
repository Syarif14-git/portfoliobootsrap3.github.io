// event pada saat link di tekan

$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");

  //   tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);
  //   console.log(elemenTujuan.offset().top);

  //   pindahkan scroll
  //   console.log($("html, body").scrollTop());
  //   $("html, body").scrollTop(elemenTujuan.offset().top);
  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1000
  );

  e.preventDefault();
});

// untuk menyimpan parallax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // buat efek di jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });
  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });
  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });

  if (wScroll >= 250) {
    $(".jumbotron h1").addClass("hilang");
    $(".jumbotron p").addClass("hilang");
  } else {
    $(".jumbotron h1").removeClass("hilang");
    $(".jumbotron p").removeClass("hilang");
  }

  console.log(wScroll);

  // buat efek paragraf di about
  if (wScroll >= 250 && wScroll <= 700) {
    $(".about .paragraf").addClass("pas");
  } else {
    $(".about .paragraf").removeClass("pas");
  }

  // buat efek portfolio
  if (wScroll >= 600 && wScroll <= 1200) {
    $(".portfolio .thumbnail").addClass("muncul");
  } else {
    $(".portfolio .thumbnail").removeClass("muncul");
  }
});
