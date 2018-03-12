var menuContent = document.querySelector(".menu-content");
var menuMini = document.querySelector(".menu-mini");
var albumCover = document.querySelectorAll(".covers");
var albumInfo = document.querySelectorAll(".album-info");
var submit = document.querySelector("#submit");



menuMini.addEventListener("click", function() {
  menuContent.style.display = "block";
});

menuContent.addEventListener("click", function() {
  menuContent.style.display = "none";
});


albumCoverDisplay();


function albumCoverDisplay() {

  var i = 0;
  for (let i = 0; i < albumCover.length; i++) {
    console.log(i);
    albumCover[i].addEventListener("click", function() {
      for (var j = 0; j < albumCover.length; j++) {
        albumInfo[j].style.display = "none";
      }
      console.log(i);
      albumInfo[i].style.display = "block";
    });
  }
}

submit.addEventListener("click", function() {
  var name = document.forms["contact"]["name"].value;
  var email = document.forms["contact"]["email"].value;
  if (name == "" && email == "") {
    alert("Name and Email must be filled out");
  } else if (name == "") {
    alert("Name must be filled out");
  } else if (email == "") {
    alert("Email must be filled out");
  } else {
    alert("Your message has been submitted");
  }

});