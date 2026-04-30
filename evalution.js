let gradeForm = document.getElementById("gradeForm");
gradeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var mathInput = document.getElementById("mathInput");
  var engInput = document.getElementById("engInput");
  var civicInput = document.getElementById("civicInput");
  var biologyInput = document.getElementById("biologyInput");

  let result = document.getElementById("emptyResult");
  if (
    mathInput.value === "" ||
    engInput.value === "" ||
    civicInput.value === "" ||
    biologyInput.value === ""
  ) {
    result.innerHTML =
      "Make sure you input all the field before proceeding!!!.";

    return;
  }

  if (
    parseFloat(mathInput.value) < 0 ||
    parseFloat(mathInput.value) > 100 ||
    parseFloat(engInput.value) < 0 ||
    parseFloat(engInput.value) > 100 ||
    parseFloat(civicInput.value) < 0 ||
    parseFloat(civicInput.value) > 100 ||
    parseFloat(biologyInput.value) < 0 ||
    parseFloat(biologyInput.value) > 100
  ) {
    result.innerHTML = "Make sure you input the value between 0 - 100";
    return;
  }
  const math = parseFloat(mathInput.value);
  const eng = parseFloat(engInput.value);
  const civic = parseFloat(civicInput.value);
  const biology = parseFloat(biologyInput.value);

  const total = math + eng + civic + biology;
  const average = (math + eng + civic + biology) / 4;
  let  grade =  document.getElementById("valueResult");
  result.innerHTML = `the total  score is ${total} and the average score is ${average}.`;
  if(average >= 50){
    grade.innerHTML = "You passed.";
  }
  else{
    grade.innerHTML = "You failed.";
  }
});
