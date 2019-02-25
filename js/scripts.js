var answers =["Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero",  "To submit a form using JavaScript use document.form[0].submit();"," //for Single line 'This' keyword refers to the object from where it was called", "Netscape "];
var pointsPerCorrect = 20;

function percentage(score) {
return "your score is " + parseInt((score / 80) * 100) + "%";
}

$(document).ready(function(){
  $("#question").submit(function (event) {


    $('#results').text('');
    var score = 0;
    var answer1 = ($("input[type=radio][name=question1Answer]:checked").val());
    var answer2 = ($("input[type=radio][name=question2Answer]:checked").val());
    var answer3 = ($("input[type=radio][name=question3Answer]:checked").val());
    var answer4 = ($("input[type=radio][name=question4Answer]:checked").val());
    var answer5 = ($("input[type=radio][name=question5Answer]:checked").val());


    if (answer1 === undefined || answer2 === undefined || answer3 === undefined || answer4 ===undefined || answer5 ===undefined) {
$('#questionsIncomplete').text('Please Complete questions Before Submitting');
$('#questionsIncomplete').fadeOut(10000);
} else {
   if (answer1 === answers[0]) {
score += pointPerCorrect;
}
   if (answer2 === answers[1]) {
score += pointPerCorrect;
}
   if (answer3 === answers[2]) {
score += pointPerCorrect;
}
if (answer4 === answers[3]) {
score += pointPerCorrect;
}
if (answer5 === answers[4]) {
score += pointPerCorrect;
}

   $("input[type=radio][name=question1Choice]:checked").prop('checked', false);
   $("input[type=radio][name=question2Choice]:checked").prop('checked', false);
   $("input[type=radio][name=question3Choice]:checked").prop('checked', false);
   $("input[type=radio][name=question4Choice]:checked").prop('checked', false);
   $("input[type=radio][name=question5Choice]:checked").prop('checked', false);
   $('#questionsIncomplete').text('');
   $('#result').text(percentage(score));
}
     event.preventDefault();
});
});
