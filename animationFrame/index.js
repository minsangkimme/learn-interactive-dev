{
    var canvas_1 = document.querySelector('.canvas');
    var context_1 = canvas_1.getContext('2d');
    var timerId_1;
    var isReturn_1 = false;
    var xPos_1 = 50;
    function draw() {
        context_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
        context_1.beginPath();
        context_1.arc(xPos_1, 200, 10, Math.PI * 2, 0, false);
        context_1.fill();
        isReturn_1 ? xPos_1 -= 10 : xPos_1 += 10;
        if (xPos_1 >= canvas_1.width - 10) {
            isReturn_1 = true;
        }
        if (xPos_1 <= 10) {
            isReturn_1 = false;
        }
        timerId_1 = requestAnimationFrame(draw);
    }
    draw();
}
