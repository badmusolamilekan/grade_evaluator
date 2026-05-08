let gradeForm = document.getElementById("gradeForm");
gradeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const mathRaw = document.getElementById("mathInput").value;
  const engRaw = document.getElementById("engInput").value;
  const civicRaw = document.getElementById("civicInput").value;
  const bioRaw = document.getElementById("biologyInput").value;

  let result = document.getElementById("emptyResult");
  result.classList.remove("text-red-500", "text-green-500");

  let grade = document.getElementById("valueResult");
  grade.classList.remove("text-red-500", "text-green-500");

  if (!mathRaw || !engRaw || !civicRaw || !bioRaw) {
    result.innerHTML = "Make sure you input all fields before proceeding!!!";
    result.classList.add("text-red-500");
    return;
  }

  const mathVal = Number(mathRaw);
  const engVal = Number(engRaw);
  const civicVal = Number(civicRaw);
  const bioVal = Number(bioRaw);

  if (isNaN(mathVal) || isNaN(engVal) || isNaN(civicVal) || isNaN(bioVal)) {
    result.innerHTML = "Your score must be a number, not text.";
    result.classList.add("text-red-500");
    return;
  }

  if (
    mathVal < 0 || mathVal > 100 ||
    engVal < 0 || engVal > 100 ||
    civicVal < 0 || civicVal > 100 ||
    bioVal < 0 || bioVal > 100
  ) {
    result.innerHTML = "Make sure you input values between 0 - 100";
    result.classList.add("text-red-500");
    return;
  }

  const total = mathVal + engVal + civicVal + bioVal;
  const average = total / 4;

  result.innerHTML = `The total score is ${total} and the average score is ${average}.`;

  if (average >= 50) {
    result.classList.add("text-green-500");
    grade.innerHTML = "You passed.";
    grade.classList.add("text-green-500");
  } else {
    result.classList.add("text-red-500");
    grade.innerHTML = "You failed.";
    grade.classList.add("text-red-500");
  }
});