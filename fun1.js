// Start of car animation

const press = document.getElementById("btn"),
  press1 = document.getElementById("img1");
let c = 0,
  l = 0;
function play() {
  if (c == 0) {
    press1.style.animation = "none";
    press1.src = "Img_05.png";
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("green").style.backgroundColor = "white";
    document.getElementById("anime").stop();
    c = 1;
  } else {
    press1.style.animation = "suspension 800ms linear infinite";
    press1.src = "Img_06.png";
    document.getElementById("green").style.backgroundColor = "green";
    document.getElementById("red").style.backgroundColor = "white";
    document.getElementById("anime").start();
    c = 0;
  }
}

press.addEventListener("click", function () {
  play();
});

document.addEventListener("keydown", function (e) {
  if (e.key == "f" || e.key == "F") {
    play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "l" || e.key == "L") {
    if (l === 0) {
      press1.src = "Img_05.png";
      l = 1;
    } else {
      press1.src = "Img_06.png";
      l = 0;
    }
  }
});

// End of car animation

// Start of reaction game

const press2 = document.getElementById("btn1"),
  press6 = document.getElementById("img2");

let a = 0,
  score = 0,
  count = 0;

function assign2() {
  if (count == 1) {
    document.getElementById("msg").innerHTML =
      "You have stopped it" + " " + count + " " + "time !";
  } else {
    document.getElementById("msg").innerHTML =
      "You have stopped it" + " " + count + " " + "times !";
  }
}

function game() {
  if (a == 0) {
    count++;
    if (press6.style.marginLeft == 45 + "px") {
      score++;
      assign2();
      alert("you did it!");
    } else {
      assign2();
    }
    document.getElementById("score").innerHTML = score;
    document.getElementById("anime2").stop();
    a = 1;
  } else {
    document.getElementById("anime2").start();
    a = 0;
  }
}

press2.addEventListener("click", function () {
  game();
});

document.addEventListener("keydown", function (e) {
  if (e.key == "s" || e.key == "S") {
    game();
  }
});

// End of reaction game
