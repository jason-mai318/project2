//Submits the name when the user presses enter
//loads the code after the webpage loads so it doesnt return a null value
window.onload = function() {
  var input = document.getElementById("myText");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("name-submit").click();
    }
  });
};
//Ask for name input
function submitName() {
  var name = document.getElementById("myText").value;
  if (name == "Enter your name here" || name == "") {
    alert("Please enter a name.");
  } else {
    var nameV2 = ", " + name;
    runIntro(nameV2);
  }
}
//If they choose to skip name imput
function skipName() {
  var name = "";
  runIntro(name);
}
//Play the intro animation
function runIntro(name) {
  var welcome_screen = document.getElementById("welcome-screen");
  var welcome_text = document.createElement("p");
  document.getElementById("welcome-screen-frame").style.display = "none";
  welcome_screen.style.animation = "welcome-screen-go-up 2s 1 2s";
  welcome_screen.style.animationDelay = "2s";
  welcome_screen.style.animationFillMode = "forwards";
  welcome_screen.appendChild(welcome_text);
  welcome_text.style.fontSize = "10vh";
  welcome_text.style.opacity = "0";
  welcome_text.style.animation = "hello-fade-in 2s 1";
  welcome_text.style.animationFillMode = "forwards";
  welcome_text.innerText = "Hello" + name + "!";
  document.getElementById("display-4").innerHTML = "Welcome" + name + "!";
}
