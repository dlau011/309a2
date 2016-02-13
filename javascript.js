
var game_area = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 400;
		this.canvas.height = 600;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	}
}
var bugs = [];
var food = [];

function start_game() {
	game_area.start();
	// call function that calls while loop and puts bugs on the screen until can't
	bug = new bug("orange", 30);
}

function update_game() {
	game_area.clear();

}

function bug(color, speed){
    this.color = color;
    this.speed = speed;
    context = game_area.context;
    var radius = 5;
    var marginX = 25
    var marginY = 25
	// Draw head
	context.beginPath();
	context.arc(marginX, marginY, radius, Math.PI-1, 2*Math.PI + 1);
	context.strokeStyle = color;
	context.stroke();
	context.fillStyle = color;
	context.fill();

	// Translate canvas down a little
	context.translate(0,radius+3);
	// Draw middle
	context.beginPath();
	context.arc(marginX, marginY, radius, Math.PI-1, 2*Math.PI + 1);
	context.stroke();
	context.fillStyle = color;
	context.fill();
	context.strokeStyle = color;
    // save state
    context.save();
    // scale canvas
    context.scale(1, 1.75);
    // draw circle which will be stretched into an oval
    context.beginPath();
    context.arc(marginX, marginY-5, radius, 0, 2 * Math.PI, false);
    // restore to original state
    context.restore();
    // Apply styling to oval
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = color;
    context.stroke();
    // Draw legs; go from point on body outwards
    //1 left
    context.moveTo(20, 22);
    context.lineTo(13, 18);
    context.stroke();
    //2 left
    context.moveTo(20, 28);
    context.lineTo(13, 28);
    context.stroke();
    //3 left
    context.moveTo(20, 35);
    context.lineTo(13, 38);
    context.stroke();
    //1 right
    context.moveTo(30, 22);
    context.lineTo(37, 18);
    context.stroke();
    //2 right
    context.moveTo(30, 28);
    context.lineTo(37, 28);
    context.stroke();
    //3 right
    context.moveTo(30, 35);
    context.lineTo(37, 38);
    context.stroke();
}

function check(value) {
	if (value == 1) {
		document.getElementById("score_display").innerHTML = "300";
	}
	else {
		document.getElementById("score_display").innerHTML = "100";
	}
}

function toggle_page() {
	var homepage = 	document.getElementById("homepage");
	var gamepage = document.getElementById("gamepage");
	if (homepage.style.display != "none") {
		homepage.style.display = "none";
		gamepage.style.visibility = "visible";
	}
	else {
		homepage.style.display = "initial";
		gamepage.style.display ="initial";
	}
	start_game();
}

