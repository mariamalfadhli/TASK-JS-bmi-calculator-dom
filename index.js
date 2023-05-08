function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });
  let BMI = (100* weight/(height^2));
  alert(BMI)

  // You are going to write the code here before the curly braces 👇🏻

  if (BMI <= 18.5){ alert("you are underweight")}
  else if (BMI >= 18.5 || BMI <= 24.9) {alert("your healthy weight")}
  else alert("you are overweight")

}
