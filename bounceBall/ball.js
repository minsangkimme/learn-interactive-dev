export class Ball {
    constructor(stageWidth, stageHeight, radius, speed) {
        this.radius = radius; // 반지름
        this.vx = speed; //  x  좌표값을 움직이는 속도
        this.vy = speed; // y 좌표값을 움직이는 속도

        const diameter = this.radius * 2;
        this.x = diameter + (Math.random() * stageWidth - diameter); // 스테이지에 랜덤으로 위치할 수 있게 함수 정의
        this.y = diameter + (Math.random() * stageHeight - diameter); // 스테이지에 랜덤으로 위치할 수 있게 함수 정의
    }

    draw(ctx, stageWidth, stageHeight, block) {
        //스테이지 사이즈를 가져옴 -> 캔버스 context에 그림을 그릴 수 있는 상태가 됨
        this.x += this.vx;
        this.y += this.vy;
        // x 와 y 값에 vx와 vy를 더해줘서 공이 움직이도록 설정됨

        this.bounceWindow(stageWidth, stageHeight);
        
        this.bounceBlock(block);

        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    // 스테이지 넓이와 높이를 가져와서 스테이지상에 닿았는지 판단하는 함수
    bounceWindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;
        
        // 공이 어디 닿았는지 판단하고
        // vx와 vy에 -1을 곱해줘서 반대로 움직이는 것을 구현
        if (this.x <= minX || this.x >= maxX) {
            console.log(this.x)
            this.vx *= -1;
            this.x += this.vx;
        } else if (this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
            this.y += this.vy;
        }
    }

    bounceBlock(block) {
        const minX = block.x - this.radius;
        const maxX = block.maxX + this.radius;
        const minY = block.y - this.radius;
        const maxY = block.maxY + this.radius;

        if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
            // 공이 양옆에 충돌하는지 위아래 충돌하는지 판단하기 위해서는 
            // ball의 좌표와 block의 좌표를 비교해서 어느 값이 가장 근접한 지를 찾으면 위치를 알 수 있음
            const x1 = Math.abs(minX - this.x);
            const x2 = Math.abs(this.x - maxX);
            const y1 = Math.abs(minY - this.y);
            const y2 = Math.abs(this.y - maxY);
            const min1 = Math.min(x1, x2);
            const min2 = Math.min(y1, y2);
            const min = Math.min(min1, min2);

            if (min === min1) {
                this.vx *= -1;
                this.x += this.vx;
            } else if (min === min2) {
                this.vy *= -1;
                this.y += this.vy;
            }
        }
    }
}