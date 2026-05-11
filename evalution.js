let gradeForm = document.getElementById("gradeForm");

gradeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const mathRaw = document.getElementById("mathInput").value;
  const engRaw = document.getElementById("engInput").value;
  const civicRaw = document.getElementById("civicInput").value;
  const biologyRaw = document.getElementById("biologyInput").value;

  let result = document.getElementById("emptyResult");
  let grade = document.getElementById("valueResult");

  // Reset UI
  result.classList.remove("text-red-500", "text-green-500");
  grade.classList.remove("text-red-500", "text-green-500");
  grade.innerHTML = "";

  const mathVal = Number(mathRaw);
  const engVal = Number(engRaw);
  const civicVal = Number(civicRaw);
  const bioVal = Number(biologyRaw);

  // Validation Logic
  if (!mathRaw || !engRaw || !civicRaw || !biologyRaw) {
    result.innerHTML = "Make sure you input all fields before proceeding!!!";
    result.classList.add("text-red-500");
     grade.innerHTML = "";
  } 
  else if (isNaN(mathVal) || isNaN(engVal) || isNaN(civicVal) || isNaN(bioVal)) {
    result.innerHTML = "Your score must be a number, not text.";
    result.classList.add("text-red-500");
     grade.innerHTML = "";
  } 
  else if (mathVal < 0 || mathVal > 100 || engVal < 0 || engVal > 100 || civicVal < 0 || civicVal > 100 || bioVal < 0 || bioVal > 100) {
    result.innerHTML = "Make sure you input values between 0 - 100";
    result.classList.add("text-red-500");
     grade.innerHTML = "";
  } 
  else {
    const total = mathVal + engVal + civicVal + bioVal;
    const average = total / 4;

    result.innerHTML = `The total score is ${total} and the average score is ${average}.`;
     grade.innerHTML =  "";

    if (average >= 50) {
      result.classList.add("text-green-500");
      grade.innerHTML = "You passed.";
      grade.classList.add("text-green-500");
    } else {
      result.classList.add("text-red-500");
      grade.innerHTML = "You failed.";
      grade.classList.add("text-red-500");
    }
  }
});
