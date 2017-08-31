var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

//new object constructor to create bonus info
function EmployeeBonus (name, employeeNumber, annualSalary, reviewRating) {
    this.name = name;
    this.bonusPercentage = bonusPercentageCalc(reviewRating, employeeNumber, annualSalary);
    this.totalBonus = totalBonus(annualSalary, bonusPercentage);
    this.totalCompensation = totalComp(totalBonus, annualSalary);
} //end of constructor

function bonusPercentageCalc(reviewRatingInput, employeeNumberInput, annualSalaryInput) {
    var bonusPercentage = null;
    if (reviewRatingInput <= 2){
        bonusPercentage = 0;    
        //return bonusPercentage
     } else if (reviewRatingInput === 3) {
         bonusPercentage = 0.04;
         //return bonusPercentage;
     } else if (reviewRatingInput === 4) {
         bonusPercentage = 0.06;
         //return bonusPercentage;
     } else if (reviewRatingInput === 5) {
         bonusPercentage = 0.1;
         //return bonusPercentage;
     } 
      if (employeeNumberInput.length == 4){  //might need to change string to number
        bonusPercentage += 0.05;
     }
      if (annualSalaryInput >= 65000){
        bonusPercentage -= 0.01;
      }

     return bonusPercentage;
}

function totalBonus(annualSalaryInput, bonusPercentageInput) {
    //console.log(annualSalary * bonusPercentage);
    return Math.round(annualSalaryInput * bonusPercentageInput);
}

function totalComp(totalBonusInput, annualSalaryInput) {
    return totalBonusInput + annualSalaryInput;
}


var testEmployee = new EmployeeBonus (atticus.name, atticus.employeeNumber, atticus.annualSalary, atticus.reviewRating);


//console.log(bonusPercentageCalc(atticus.reviewRating, atticus.employeeNumber, atticus.annualSalary));
console.log(bonusPercentageCalc(employees[0].reviewRating, employees[0].employeeNumber , employees[0].annualSalary));
console.log(bonusPercentageCalc(employees[1].reviewRating, employees[1].employeeNumber , employees[1].annualSalary));
//console.log(totalCompensation());
console.log(testEmployee);
