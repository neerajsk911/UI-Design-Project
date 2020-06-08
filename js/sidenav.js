(function windowsize(){
  if(screen.width<1000){
    document.querySelector("#sidebar-wrapper").style.background="rgba(0,0,0,0.6)";
  }
})();
$(document).ready(function () {
  var trigger = $(".hamburger"),
    overlay = $(".overlay"),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $("#wrapper").toggleClass("toggled");
  });
});

function clrchange(to,from)
{
  document.getElementById(to).style.background="linear-gradient(to right, #7f00ff, #e100ff)";
  document.getElementById(from).style.background="transparent";
}
function addname(name){
  var p=document.getElementById("reviewModalLongTitle");
  p.innerText=p.innerText+" "+name;
}