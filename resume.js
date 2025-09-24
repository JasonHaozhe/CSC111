//Define Variables

let myName = "Haozhe Huang";
console.log("Hello, my name is " + myName);
let myEmail = "Haozhe21860@oru.edu.oru";   
console.log("My email is " + myEmail);
let title ="Students";
console.log("I am a " + title);
let experience ="Chinese Student";
console.log("I am a " + experience);
let education ="Oral Roberts University";
console.log("I study in " + education);
let Skills = "Computer Science";
console.log("I am learning" + Skills);


//let skills = "something";//TODO

//connect Variables to the HTML (ligaments)


document.getElementById("my-name").textContent = myName;
document.getElementById("my-email").textContent = myEmail;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent =education;
document.getElementById("Skills").textContent = Skills;