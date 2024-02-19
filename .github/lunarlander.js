let y = 50;
let velocityY = 0;
let speed = 0;
let gravity = 0.1;
let gameOverText = false;
let startScreen = true;
let engineFire = false;

function rocketship(x, y) {
  push();
  translate(300, y);
  scale(0.25);
  // wings
  stroke(33, 5, 19);
  fill(132, 22, 77);
  arc(0, +140, 200, 130, PI, TWO_PI);
  // wings - light
  stroke(247, 148, 198);
  strokeWeight(8);
  noFill();
  arc(0, +140, 170, 100, PI + QUARTER_PI, TWO_PI);
  // wings - ends
  stroke(33, 5, 19);
  strokeWeight(2);
  fill(73, 6, 39);
  triangle(-100, +140, -100, +180, -20, +140);
  triangle(+100, +140, +100, +180, +20, +140);
  // nose
  fill(132, 22, 77);
  rect(-30, -45, 60, 100, 40);
  // body
  fill(139, 118, 129);
  quad(-30, +210, +30, +210, +50, +250, -50, +250);
  quad(-70, +210, -30, -10, +30, -10, +70, +210);
  // body - light
  noStroke();
  fill(201, 180, 191);
  quad(+10, +245, 0, +215, +25, +215, +40, +245);
  quad(+10, +205, -5, 0, +25, 0, +60, +205);
  // nose - light
  fill(247, 148, 198);
  ellipse(+10, -28, 20, 20);
  // window
  fill(215, 242, 255);
  stroke(33, 5, 19);
  strokeWeight(6);
  ellipse(0, +60, 50, 50);
  // window - light
  noStroke();
  fill(250, 254, 255);
  ellipse(+5, +54, 20, 20);
  if (engineFire) {
    // fire
    fill(252, 242, 95);
    triangle(-40, +250, 0, +250, -20, +275);
    triangle(+40, +250, 0, +250, +20, +275);
    fill(228, 105, 52);
    triangle(-30, +250, -10, +250, -20, +265);
    triangle(+30, +250, +10, +250, +20, +265);
  }
  pop();
}

function draw() {
  if (startScreen) {
    displayStartScreen();
  } else {
    background(30, 0, 60);
    // blue planet
    push();
    translate(430, 260);
    scale(2.4);
    rotate(-0.3);
    noStroke();
    fill(107, 187, 212);
    ellipse(0, 0, 150, 150);
    noFill();
    strokeWeight(3);
    stroke(41, 131, 192);
    ellipse(0, 0, 200, 60);
    strokeWeight(2);
    stroke(77, 212, 185);
    ellipse(0, 0, 205, 60);
    strokeWeight(1.5);
    stroke(37, 85, 112);
    ellipse(0, 0, 180, 50);
    ellipse(0, 0, 220, 60);
    ellipse(0, 0, 200, 60);
    fill(107, 187, 212);
    noStroke();
    arc(0, 0, 150, 150, PI, TWO_PI);
    pop();
    // moon
    noStroke();
    fill(212, 212, 212);
    ellipse(300, 760, 800, 600, PI, 0);

    rocketship(300, y);

    gameOver();

    velocityY += gravity;

    y += velocityY * speed;

    if (keyIsDown(38)) {
      speed = -0.6;
      engineFire = true;
    } else {
      speed = 2.5;
      engineFire = false;
    }

    // rocket stops moving when it reaches y=400
    if (y < 400) {
      y += velocityY * speed;
    } else {
      y = 400;

      speed = 0;
    }

    //The following 7 lines of code was adpated from https://editor.p5js.org/skallywag/sketches/ByydCKx3m Accessed: 2024-02-17
    if (gameOverText) {
      stroke(132, 22, 77);
      strokeWeight(7);
      fill(255, 255, 255);
      textSize(70);
      textAlign(CENTER, CENTER);
      text("GAME OVER", width / 2, height / 2);
    }
  }

  function gameOver() {
    if (y >= 400 && speed >= 2.5) {
      gameOverText = true;
    }
  }
}

// the following 11 lines of code was adpated from https://chat.openai.com/share/b0da0a03-581c-4089-8b30-0478fad949d0 Accessed: 2024-02-19
// start screen
function keyPressed() {
  if (keyCode === ENTER && startScreen) {
    startScreen = false;
  }
}

function displayStartScreen() {
  background(129, 90, 139);
  stroke(132, 22, 77);
  strokeWeight(7);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("Press ENTER to start", width / 2, height / 2); // Display start message
}
