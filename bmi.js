// here the code for BMI Calculator in javascript 

function BMIcalculator(weight,height) {
    var BMI= weight/(height*height);
     var interpretation;
    if (BMI<18.5)
    { interpretation ="your bmi is ";
      console.log(interpretation+BMI);
    }
    if(BMI>18.5 && BMI<24.9)
    { interpretation ="your bmi is ";
      console.log(interpretation+BMI+" you have normal weight");
    }
    if(BMI>24.9)
    {  
      interpretation ="your bmi is ";
      console.log(interpretation+BMI+" you have overweight");
    }
        
    return BMI;
}
console.log("your bmi is :"+BMIcalculator(50,1.4));
