function menuHover() {
  $(".menu__item").hover(function () {
    console.log(1);
    $(this).find(".menu__list-inner").stop().toggle();
    $(".menu__list-bg").stop().toggle();
    $(this).find(">a").removeClass("light");
  }, );
}

function menuBar() {
  const bar = $(".menu__bar");
  const barWidthDefault = $(".menu__item")
    .filter(":first-child")
    .find("a")
    .width();
  const barLocDefault = $(".menu__item")
    .filter(":first-child")
    .find("a")
    .offset().left;
  // $(".menu__item a").mouseenter(function () {
  //   const barWidth = $(this).width();
  //   const barLocation = $(this).offset().left - barLocDefault;
  //   bar.stop().animate({ left: barLocation, width: barWidth });
  // });
  // $(".menu__item a").mouseleave(function () {
  //   bar.stop().animate({ left: 0, width: barWidthDefault });
  //   console.log("leave");
  // });
  $(".menu__item >a").mouseenter(function () {
    const barWidth = $(this).width();
    const barLocation = $(this).offset().left - barLocDefault;
    bar.stop().animate({ left: barLocation, width: barWidth });
  });
  // $(".menu__item> a").mouseleave(function () {
  //   bar.stop().animate({ left: 0, width: barWidthDefault });
  //   console.log("leave");
  // });
}
function init() {
  menuHover();
  menuBar();
}
init();
