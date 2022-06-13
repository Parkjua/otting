$("#scrollTop").hide();
// 처음에는 탑 이미지를 감춥니다.
$("#scrollTop").click(function () {
  console.log("click");
  $("html,body").animate({ scrollTop: 0 }, 1000);
});
$(window).scroll(function () {
  // 스크롤을 할때
  if ($(this).scrollTop() > 1550) {
    $("#scrollTop").fadeIn();
  }
  // 스크롤이 100 픽셀만큼 내려오면 탑 아이콘이 서서히 나타납니다.
  else {
    $("#scrollTop").fadeOut();
  }
  // 스크롤이 100 픽셀 이하이면 탑 아이콘이 서서히 사라집니다.
});
