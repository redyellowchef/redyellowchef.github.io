function Note(lane, y, key)
{
    this.lane = lane;
    this.x;
    this.y = y;
    this.width = 65;
    this.height = 65;
    this.key = key;

    this.start = function()
    {
        this.x = canvas.clientWidth / 2 - xSpacing * 2 + xSpacing * (this.lane - 1);
        this.y *= -ySpacing;
    }

    this.update = function()
    {
        this.y += speed;
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
