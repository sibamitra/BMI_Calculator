function calculateBMI() {
  var height = parseFloat(document.getElementById("height").value);
  var heightUnit = document.getElementById("heightUnit").value;
  var weight = parseFloat(document.getElementById("weight").value);
  var weightUnit = document.getElementById("weightUnit").value;

  if (heightUnit === "cm") {
      height /= 100; 
  } else if (heightUnit === "ft") {
      height *= 0.3048; 
  } else if (heightUnit === "in") {
      height *= 0.0254; 
  }

 
  if (weightUnit === "g") {
      weight /= 1000; 
  } else if (weightUnit === "lbs") {
      weight *= 0.453592; 
  } else if (weightUnit === "oz") {
      weight *= 0.0283495;
  }

  var bmi = weight / (height * height);

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>";

  if (bmi < 18.5) {
      resultDiv.innerHTML += "You are underweight.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
      resultDiv.innerHTML += "You have a normal weight.";
  } else if (bmi >= 25 && bmi < 29.9) {
      resultDiv.innerHTML += "You are overweight.";
  } else {
      resultDiv.innerHTML += "You are obese.";
  }
}

function resetValues() {
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('heightUnit').value = 'cm';
  document.getElementById('weightUnit').value = 'kg';
  document.getElementById('result').textContent = '';
}
