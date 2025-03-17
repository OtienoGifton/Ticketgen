//targt the two pages
let page1 = document.getElementById("pone");
let page2 = document.getElementById("ptwo");
//get elements on the first page 
let mainForm = document.getElementById("form");
let fileInput = document.getElementById("fileUpload");
let fullName = document.getElementById("fName");
let emailAddress = document.getElementById("mail");
let gitHub = document.getElementById("gitt");
//get elements on the second page
let enteredName = document.getElementById("eName"); //place the entered name here
let cardName = document.getElementById("cname"); //place the entered name here too
let enteredmail = document.getElementById("enmail"); //place entered email here 
let userName = document.getElementById("uname"); //place the entered username here
let userImage = document.getElementById("uimage"); //place the uploaded image here
let tickNumber = document.getElementById("uniqnum"); //put the new unique numder here



mainForm.addEventListener("submit",function(e){
e.preventDefault()
 
//change visibility of the pages 
page1.style.display ="none";
page2.style.display ="block";

//generate a card number
let letters = "A657BVGkxvetrD36GHG787GHKT5YTUJY876deetruyi";
let letter = "";

for(i = 0;i < 6; i++){
  letter += letters[Math.floor(Math.random() * letters.length)];
  tickNumber.innerHTML = "#" + letter;
}
  



//add the details to the card
enteredName.innerHTML = fullName.value;
cardName.innerHTML = fullName.value;
enteredmail.innerHTML = emailAddress.value;
userName.innerHTML = "@" + gitHub.value;

const file = fileInput.files[0];
if(file){
  const imgUrl = URL.createObjectURL(file);
  userImage.innerHTML = `<img src="${imgUrl}" alt="Uploaded Image">`;
}

});


