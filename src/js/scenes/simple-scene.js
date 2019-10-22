export class SimpleScene extends Phaser.Scene {
    preload() {
        this.load.image('donut', 'assets/donut.png');
    }

    create() {
        let { width, height } = this.sys.game.canvas;
        var donut = this.add.image(100, 200, 'donut');

        donut.scale = .5;
        donut.x = width / 2;
        donut.y = height / 2;
    }
}
