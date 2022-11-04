function Note(lane, y)
{
    this.lane = lane;
    this.x;
    this.y = y;
    this.width = 60;
    this.height = 60;
    this.key;

    this.start = function()
    {
        this.x = canvas.clientWidth / 2 - xSpacing * 2 + xSpacing * (lane - 1);
    }

    this.update = function()
    {
        this.y += conductor.bpm / 60 * speed;
    }

    this.draw = function()
    {
        context.fillStyle = "#40FF40";
        context.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);

        context.fillStyle = "#000000";
        context.font = '40px monospace';
        context.textAlign = "center";
        context.fillText(this.key, this.x, this.y + this.height / 5);
    }
}
