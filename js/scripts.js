$(document).ready(function(){
  $("#politicalForm").submit(function(event){
    var sameSexMarriageAnswer  = $("input:radio[name=sameSexMarriage]:checked").val();
    var abortionAnswer = $("input:radio[name=abortion]:checked").val();
    var globalWarmingAnswer = $("input:radio[name=globalWarming]:checked").val();
    var gunControlAnswer = $("input:radio[name=gunControl]:checked").val();
    var welfareAnswer = $("input:radio[name=welfare]:checked").val();

    if (sameSexMarriageAnswer === "sameSexMarriageInFavor" && abortionAnswer === "abortionInFavor" && globalWarmingAnswer === "globalWarmingInFavor" && gunControlAnswer === "gunControlInFavor" && welfareAnswer ==="welfareInFavor") {
      var politicalAffiliation = "very liberal"
    } else if (sameSexMarriageAnswer === "sameSexMarriageUndecided" && abortionAnswer === "abortionUndecided" && globalWarmingAnswer === "globalWarmingUndecided" && gunControlAnswer === "globalControlUndecided" && welfareAnswer ==="welfareUndecided"){
      var politicalAffiliation = "undecided"
    } else if (sameSexMarriageAnswer === "sameSexMarriageAgainst" && abortionAnswer === "abortionAgainst" && globalWarmingAnswer === "globalWarmingAgainst" && gunControlAnswer === "gunControlAgainst" && welfareAnswer ==="welfareAgainst"){
      var politicalAffiliation = "very conservative"
    } else {
      var politicalAffiliation = "neither extremely conservative or liberal"
    }

    $("#affiliation").empty().append(politicalAffiliation);
    $("#result").show();

    event.preventDefault();
  });


});
