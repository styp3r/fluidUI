$(".g1, .g2, .g3").toggle();
$(".btn").click(()=>{
  console.log("Button Clicked!");
  $("#loginUI").animate({height: "250px"}, 200);
  $("#loginUI").toggleClass("collapse");


  if ($(".btn").text() == "v"){
       $(".btn").text("^");
     }
    else{
       $(".btn").text("v");
       $("#loginUI").animate({height: "100px"}, 200);
     }

       $(".g1, .g2, .g3").fadeToggle(250);
});
