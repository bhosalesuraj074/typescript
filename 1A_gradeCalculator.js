var sub1 = prompt("Enter math score:");
var math = parseFloat(sub1);
console.log("marks of the Maths: ".concat(math));
var sub2 = prompt("Enter Physics score:");
var physics = parseFloat(sub2);
console.log("marks of the Physics :".concat(physics));
var sub3 = prompt("Enter Chemistry score:");
var chemistry = parseFloat(sub3);
console.log("marks of the chemistry :".concat(chemistry));
var totalMarks = (math + physics + chemistry);
console.log("Total of all subjects marks: ", totalMarks);
console.log("Average Marks of all subjects", totalMarks / 3);
if (totalMarks < 100 && totalMarks > 75) {
    console.log("Grade A");
}
else if (totalMarks < 75 && totalMarks > 60) {
    console.log("Grade B");
}
else if (totalMarks < 60 && totalMarks > 45) {
    console.log("Grade C");
}
else if (totalMarks < 35) {
    console.log("Failed");
}
