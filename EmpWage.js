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
//UC 7A - Calc total Wage using Array forEach traversal or reduce method
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

//UC 7B - show the Day along with Daily Wage using Array map helper function
let dailyCntr = 0;

function empDailyWage(dailyWage)
{
	dailyCntr++;
	return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(empDailyWage);
console.log("UC7B - Daily Wage Map" + mapDayWithWageArr);

//UC 7C - show Days when full time wage of 160 were earned
let fulltimeWage = (dailyWage) => dailyWage.includes("160");
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C- Daily Wage filter when full wage earned" + fullDayWageArr);
