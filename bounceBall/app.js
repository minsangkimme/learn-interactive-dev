import { Ball } from './ball.js';
import { Block } from './block.js';

class App {
    constructor() {
        this.cavas = document.createElement('canvas');
        this.ctx = this.cavas.getContext('2d');

        document.body.appendChild(this.cavas);

        window.addEventListener('resize', this.resize.bind(this), false);    
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.block = new Block(700, 30, 300, 450);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        // 내가 만들고자 하는 애니메이션의 크기를 아는 것이 중요
        //  스크린 사이즈를 가져와서 애니메이션을 정의 해주기 위함
        // 브라우저는 가변적이기 때문에 스크린 사이즈를 가져오는 함수를 먼저 정의 해주고
        //  작업을 하는게 좋다.
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.cavas.width = this.stageWidth * 2;
        this.cavas.height = this.stageHeight * 2;        
        this.ctx.scale(2, 2);
    }

    // 애니메이션을 실제 동작 시키는 메서드
    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.block.draw(this.ctx);
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
    }
}

window.onload = () => {
    new App();
}