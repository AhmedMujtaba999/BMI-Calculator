// here the code for BMI Calculator in javascript 

function BMIcalculator(weight,height) {
    var BMI= weight/(height*height);
    return Math.round(BMI);
}
console.log("your bmi value is :"+ BMIcalculator(50,1.4));
