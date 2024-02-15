// BACKGROUND
fill(30, 0, 60);
rect(0, 0, 600, 500);

// orange planet
push();
translate(130, 150);
scale(1.2);
fill(198, 93, 33);
noStroke();
ellipse(0, 0, 200, 200);
stroke(176, 65, 0);
strokeWeight(7);
noFill();
ellipse(0, 0, 100, 100);
strokeWeight(4);
ellipse(0, 0, 150, 150);
strokeWeight(3);
ellipse(0, 0, 160, 160);
strokeWeight(3);
stroke(255, 165, 113);
ellipse(0, 0, 50, 50);
strokeWeight(2);
ellipse(0, 0, 70, 70);
ellipse(0, 0, 120, 120);
strokeWeight(4);
ellipse(0, 0, 180, 180);
fill(176, 65, 0);
noStroke();
ellipse(0, 0, 40, 40);

pop();

// blue planet
push();
translate(480, 240);
fill(130, 211, 246);
ellipse(0, 0, 150, 150);
noFill();
strokeWeight(1);
stroke(41, 131, 192);
ellipse(0, 0, 200, 60);
strokeWeight(1);
stroke(222, 242, 255);
ellipse(0, -3, 200, 60);
strokeWeight(1);
stroke(77, 212, 185);
ellipse(0, 0, 205, 60);
strokeWeight(1);
stroke(136, 178, 169);
ellipse(0, 0, 223, 60);
ellipse(0, 0, 200, 60);
strokeWeight(1);
stroke(37, 85, 112);
ellipse(0, 0, 180, 50);
ellipse(0, +4, 220, 60);
ellipse(0, +2, 200, 60);
fill(130, 211, 246);
noStroke();
arc(0, 0, 149, 150, PI, TWO_PI);
pop();

// moon
fill(212, 212, 212);
arc(300, 500, 600, 100, PI, 0);
fill(190, 190, 190);
arc(100, 500, 70, 60, PI, 0);
arc(400, 500, 90, 70, PI, 0);
fill(140, 140, 140);
ellipse(215, 480, 30, 30);
ellipse(515, 480, 20, 20);

// ROCKETSHIP

push();
translate(300, 200);
scale(0.3);
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

// fire
fill(252, 242, 95);
triangle(-40, +250, 0, +250, -20, +275);
triangle(+40, +250, 0, +250, +20, +275);
fill(228, 105, 52);
triangle(-30, +250, -10, +250, -20, +265);
triangle(+30, +250, +10, +250, +20, +265);

pop();
