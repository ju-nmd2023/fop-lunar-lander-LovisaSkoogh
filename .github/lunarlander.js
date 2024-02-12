
// SPACESHIP
// wings
stroke(33, 5, 19);
fill(132, 22, 77);
arc(300, 340, 200, 130, PI, TWO_PI);
// wings - light
stroke(247, 148, 198);
strokeWeight(8);
noFill();
arc(300, 340, 170, 100, PI + QUARTER_PI, TWO_PI);
// wings - ends
stroke(33, 5, 19);
strokeWeight(2);
fill(73, 6, 39);
triangle(200, 340, 200, 380, 280, 340);
triangle(400, 340, 400, 380, 320, 340);

// nose
fill(132, 22, 77);
rect(270, 145, 60, 100, 40);

// body
fill(139, 118, 129);
quad(270, 410, 330, 410, 350, 450, 250, 450);
quad(230, 410, 270, 190, 330, 190, 370, 410);
// body - light
noStroke();
fill(201, 180, 191);
quad(310, 445, 300, 415, 325, 415, 340, 445);
quad(310, 405, 295, 200, 325, 200, 360, 405);

// nose - light
fill(247, 148, 198);
ellipse(310, 168, 20, 20);

// window
fill(215, 242, 255);
stroke(33, 5, 19);
strokeWeight(6);
ellipse(300, 260, 50, 50);
// window - light
noStroke();
fill(250, 254, 255);
ellipse(305, 254, 20, 20);

// fire
fill(252, 242, 95);
triangle(260, 450, 300, 450, 280, 475);
triangle(340, 450, 300, 450, 320, 475);
fill(228, 105, 52);
triangle(270, 450, 290, 450, 280, 465);
triangle(330, 450, 310, 450, 320, 465);



