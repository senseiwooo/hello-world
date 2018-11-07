function consoles() {
  console.log("Hello, World!");
}

function popup() {
  alert("Hello, World!");
}

function browser() {
	var p = document.getElementById("hello");
  p.innerHTML = "Hello, World!";
}

function stranger() {
  var answer;
  var answer = prompt("What is your name?");
  alert("Hello " + answer + "!");
}
