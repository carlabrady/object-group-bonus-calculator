var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

//new object constructor to create bonus info
function EmployeeBonus (name, bonusPercentage, totalCompensation, totalBonus) {
    this.name = name;
    this.bonusPercentage = bonusPercentage;
    this.totalCompensation = totalCompensation;
    this.totalBonus = totalBonus;  
} //end of constructor

function bonusPercentageCalc(reviewRating,  employeeNumber, annualSalary) {
    var bonusPercentage = null;
    if (reviewRating <= 2){
        bonusPercentage = 0;    
        //return bonusPercentage
     } else if (reviewRating === 3) {
         bonusPercentage = 0.04;
         //return bonusPercentage;
     } else if (reviewRating === 4) {
         bonusPercentage = 0.06;
         //return bonusPercentage;
     } else if (reviewRating === 5) {
         bonusPercentage = 0.1;
         //return bonusPercentage;
     } 
      if (employeeNumber.length == 4){  //might need to change string to number
        bonusPercentage += 0.05;
     }
      if (annualSalary >= 65000){
        bonusPercentage -= 0.01;
      }

     return bonusPercentage;
}

function totalBonus(annualSalary, bonusPercentage) {
    //console.log(annualSalary * bonusPercentage);
    return annualSalary * bonusPercentage;
}

function totalCompensation(totalBonus, annualSalary) {
    return totalBonus + annualSalary;
}





//console.log(bonusPercentageCalc(atticus.reviewRating, atticus.employeeNumber, atticus.annualSalary));
console.log(bonusPercentageCalc(employees[0].reviewRating, employees[0].employeeNumber , employees[0].annualSalary));
console.log(bonusPercentageCalc(employees[1].reviewRating, employees[1].employeeNumber , employees[1].annualSalary));
//console.log(totalCompensation());
console.log(totalBonus(55000, 0.05));
