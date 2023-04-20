let sub1:any = prompt("Enter math score:");
let math:number = parseFloat(sub1);
console.log(`marks of the Maths: ${math}`);

let sub2:any = prompt("Enter Physics score:");
let physics:number = parseFloat(sub2);
console.log(`marks of the Physics :${physics}`);

let sub3:any = prompt("Enter Chemistry score:");
let chemistry:number = parseFloat(sub3);
console.log(`marks of the chemistry :${chemistry}`);
let totalMarks:number = (math+physics+chemistry);
console.log("Total of all subjects marks: ", totalMarks);
console.log("Average Marks of all subjects",totalMarks/3);

if(totalMarks < 100  && totalMarks >75 )
{
    console.log("Grade A");
    
}
else if(totalMarks < 75 && totalMarks >60)
{
    console.log("Grade B");
    
}
else if(totalMarks < 60 && totalMarks >45 )
{
    console.log("Grade C");
    
}
else if(totalMarks < 35)
{
    console.log("Failed");
    
}