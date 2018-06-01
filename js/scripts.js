$(document).ready(function() {
  $("button#scroll").click(function(){
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');  
  });
  $(".clickable").click(function() {
    $("#survey-showing").toggle();
    $("#survey-hidden").toggle();
  });
     $("#program-survey").submit(function(event) {
        event.preventDefault();

    var developmentPath = $("#development-focus").val();
    var workSpace = $("input:radio[name=work-space]:checked").val();
    var codeElement = $("input:radio[name=coding-type]:checked").val();
    var progLanguage = $("input:radio[name=languages]:checked").val();
    var buildType = $("input:radio[name=create]:checked").val();
    var openErollment = $("input:radio[name=enrollment]:checked").val();
    var trackSuggester = "CSS/React";

    if(workSpace ==="startups" && codeElement==="design"){
    trackSuggester = "C#/.NET";
    }
    if(workSpace==="enterprises" && codeElement==="functions"){
    trackSuggester = "CSS/React";
    }
    if(workSpace ==="freelance" && codeElement==="both" && buildType ==="websites"){
      trackSuggester = "CSS/React";
    }
    if(openErollment ==="improvement" && workSpace ==="startups" && buildType ==="applications") {
      trackSuggester = "Ruby/Rails";
    }
    if(progLanguage ==="C#/.Net" && codeElement ==="design" && openErollment ==="education") {
      trackSuggester = "C#/.Net";
    }

  $("#result").text(trackSuggester);
  });

});
