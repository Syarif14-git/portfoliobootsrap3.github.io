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
  let jot = $(".jumbotron").offset().top;
  let aot = $(".about").offset().top;
  let pot = $(".portfolio").offset().top;
  let cot = $(".contact").offset().top;

  // buat efek di jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });
  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 3.5 + "%)",
  });
  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 3 + "%)",
  });

  if (wScroll >= jot) {
    $(".jumbotron h1").addClass("hilang");
    $(".jumbotron p").addClass("hilang");
  } else {
    $(".jumbotron h1").removeClass("hilang");
    $(".jumbotron p").removeClass("hilang");
  }

  // console.log(wScroll);

  // buat efek paragraf di about
  if (wScroll >= aot - 200 && wScroll <= pot - 250) {
    $(".about .paragraf").addClass("pas");
  } else {
    $(".about .paragraf").removeClass("pas");
  }

  // buat efek portfolio
  if (wScroll >= pot - 200 && wScroll <= cot - 200) {
    $(".portfolio .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portfolio .thumbnail").eq(i).addClass("muncul");
      }, 300 * (i + 2));
    });
  } else {
    $(".portfolio .thumbnail").removeClass("muncul");
  }

  // buat efek contact
  if (wScroll >= cot - 200) {
    $(".contact .container").addClass("CMuncul");
  } else {
    $(".contact .container").removeClass("CMuncul");
  }
});

// contact
$(".c").on("click", function () {
  $(".contact .container").addClass("CMuncul");
});
