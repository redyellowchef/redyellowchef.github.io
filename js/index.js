var canvas;
var context;

var speed = 8;
var xSpacing = 85;
var ySpacing = 170;
var conductor;
var keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var notes = [];

window.onload = function()
{
    canvas = document.getElementById("gameCanvas");
    context = canvas.getContext("2d");

    for (let i = 0; i < TestMap.length; i++)
    {
        notes.push(TestMap[i]);
        TestMap[i].start();
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

    context.fillStyle = "#000000";
    context.fillRect(0, canvas.clientHeight - 130, canvas.clientWidth, 2);
}
