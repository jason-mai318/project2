function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
  console.log(x);
  document.getElementById("welcome-screen-frame").style.display = "none";
  document.getElementById("welcome-screen").style.animation =
    "welcome-screen-go-up 2s 1 2s";
  document.getElementById("welcome-screen").style.animationDelay = "2s";
  document.getElementById("welcome-screen").style.animationFillMode =
    "forwards";
  var welcome_text = document.createElement("p");
  document.getElementById("welcome-screen").appendChild(welcome_text);
  welcome_text.style.fontSize = "10vh";
  welcome_text.style.opacity = "0";
  welcome_text.style.animation = "hello-fade-in 2s 1";
  welcome_text.style.animationFillMode = "forwards";
  welcome_text.innerText = "Hello, " + x + ".";
  document.getElementById("display-4").innerHTML = "Welcome, " + x + "!";
}
