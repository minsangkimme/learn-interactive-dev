{
    const canvas: HTMLCanvasElement = document.querySelector('.canvas');
    const context = canvas.getContext('2d');
    let timerId;
    let isReturn: boolean = false;
    let xPos = 50;

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(xPos, 200, 10, Math.PI*2, 0, false);
        context.fill();

        isReturn ? xPos -= 10 : xPos += 10;

        if (xPos >= canvas.width - 10) {
            isReturn = true;
        }

        if (xPos <=  10) {
            isReturn = false;
        }

        timerId = requestAnimationFrame(draw);
    }

    draw();
    
}