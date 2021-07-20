$(".signUpForm").addClass("invisible");
$(".signUp").click(()=>{
  console.log("Button Clicked!");
  $(".signUpForm").removeClass("invisible");
  $("#loginUI").animate({height: "450px"}, 200);
  $("#signupUI").animate({height: "300px"}, 200);

  if ($(".signUp").html()=="Or Sign Up here"){
       $(".signUp").html("Have an account already?").append("<a href = '#'> Log In</a></p>");
     }
    else{
       $(".signUp").html("Or Sign Up here");
       $(".signUpForm").addClass("invisible");
       $("#loginUI").animate({height: "400px"}, 100);
       $("#signupUI").animate({height: "0"}, 150);
     }
});
