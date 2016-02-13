
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
	bug = new bug("orange");
	
}

function update_game() {
	game_area.clear();

}
/*function food() {
	context = game_area.context;
	img = new Image();
	img.onload = function() {
		canvas.width=40;
		canvas.height=30;
		context.drawImage(img, 0,0);
	}
	img.src = "http://www.onestopwebmasters.com/wp-content/uploads/2011/06/eitai-bridge.jpg";
}*/
function bug(color){
    this.color = color;
    context = game_area.context;
    var radius = 5;
	// Draw head
	context.beginPath();
	context.arc(15, 5, radius, Math.PI-1, 2*Math.PI + 1);
	context.strokeStyle = color;
	context.stroke();
	context.fillStyle = color;
	context.fill();

	// Draw middle
	context.beginPath();
	context.arc(15, 11, radius - 2, Math.PI-1, 2*Math.PI + 1);
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
    context.arc(15, 13, radius, 0, 2 * Math.PI, false);
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
    context.moveTo(12, 12);
    context.lineTo(3, 8);
    context.stroke();
    //2 left
    context.moveTo(10, 18);
    context.lineTo(3, 18);
    context.stroke();
    //3 left
    context.moveTo(10, 25);
    context.lineTo(3, 28);
    context.stroke();
    //1 right
    context.moveTo(18, 12);
    context.lineTo(27, 8);
    context.stroke();
    //2 right
    context.moveTo(20, 18);
    context.lineTo(27, 18);
    context.stroke();
    //3 right
    context.moveTo(20, 25);
    context.lineTo(27, 28);
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
function toggle_pause(source) {
	if (source.src != "play_button.png") {
		source.src = "play_button.png";
	}

	else {
		source.src = "pause_button.png";
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

