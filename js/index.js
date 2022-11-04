var canvas;
var context;

var speed = 3;
var xSpacing = 85;
var ySpacing = 85;
var conductor;
var notes = [];

window.onload = function()
{
    canvas = document.getElementById("gameCanvas");
    context = canvas.getContext("2d");

    conductor = new Conductor();

    for (let i = 0; i < 5; i++)
    {
        notes.push(new Note(i + 1, -ySpacing * i));
    }

    for (let i = 0; i < notes.length; i++)
    {
        notes[i].start();
    }

    requestAnimationFrame(update);
}

function update()
{
    for (let i = 0; i < notes.length; i++)
    {
        notes[i].update();
    }

    draw();

    requestAnimationFrame(update);
}

function draw()
{
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    for (let i = 0; i < notes.length; i++)
    {
        notes[i].draw();
    }
}
