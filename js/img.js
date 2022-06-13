$(function () {
  $("#icon_col").hover(
    function () {
      // mouseover
      $(this).attr("src", "./img/icon_white.png");
    },
    function () {
      // mouseout
      $(this).attr("src", "./img/icon_black.png");
    }
  );
});
