const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empHrs;
let empDailyWageArr = new Array();

function getWorkingHours(empCheck)
{
	switch(empCheck)
	{
		case IS_PART_TIME:
			return empHrs = PART_TIME_HOURS;
		case IS_FULL_TIME:
         return empHrs = FULL_TIME_HOURS;
		default:
			return 0;
    }
}

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
    empDailyWageArr.push(calcDailyWage(totalEmpHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days: " +totalEmpHrs + "  Emp Wage: " +empWage);

//Array Helper Function

let totalEmpWage = 0;
function sum(dailyWage){
	totalEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: "+ totalWorkingDays +
            " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);

function totalWages(totalWage, dailyWage){
	return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce " +
             empDailyWageArr.reduce(totalWages,0));
