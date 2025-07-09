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
