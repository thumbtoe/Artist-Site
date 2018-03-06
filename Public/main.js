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
  for (i = 0; i < albumCover.length; i++) {
    albumCover[i].addEventListener("click", function() {

      var j = 0;
      for (var j = 0; j < albumCover.length; j++) {
        albumCover[j].style.display = "inline-block";
      }
      this.style.display = "none";
      if (albumCover[0].style.display = "none") {
        albumInfo[0].style.display = "block";
      }
      if (albumCover[1].style.display = "none") {
        albumInfo[1].style.display = "block";
      }
      if (albumCover[2].style.display = "none") {
        albumInfo[2].style.display = "block";
      }
      if (albumCover[3].style.display = "none") {
        albumInfo[3].style.display = "block";
      }
      if (albumCover[4].style.display = "none") {
        albumInfo[4].style.display = "block";
      }
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