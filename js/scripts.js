
//business logic
function addition(q1,q2,q3,q4,q5){
 return q1+q2+q3+q4+q5;
}
$(document).ready(function(){
 $(".question-header").click(function(){
   $(".multi-choices").slideToggle("slow");
 });

 //userinterface
 $("#formid").submit(function(event){
   event.preventDefault();
   var q1 = parseInt($("input:radio[name=question-one]:checked").val());
   var q2 = parseInt($("input:radio[name=question-two]:checked").val());
   var q3 = parseInt($("input:radio[name=question-three]:checked").val());
   var q4 = parseInt($("input:radio[name=question-four]:checked").val());
   var q5 = parseInt($("input:radio[name=question-five]:checked").val());    var final = addition(q1,q2,q3,q4,q5);
   var percent = (final/100)*100;
   $("#results").text("You scored " + percent + "%");    if (percent>80 && percent<=100) {
     $("#grading").text("Excellent Performance");
   } else if (percent >=50 && percent <=80) {
     $("#grading").text("Fair Result");
   } else {
     $("#grading").text("POOR! Retake Test");
     $("#clear").show();
   }
   window.scrollTo(0,800);  });    $("#clear").click(function(){
   $(".outputField").empty();
   $("#clear").hide();
   window.scrollTo(0,0);
 });});
