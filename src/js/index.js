import 'phaser';
import { SimpleScene } from './scenes/simple-scene';

import '../scss/base.scss';

if ('serviceWorker' in navigator && !__ENV__.development) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(regitration => {
                console.log('SW registered: ', regitration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    })
}

const gameConfig = {
    width: '100%',
    height: '100%',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: SimpleScene
};

new Phaser.Game(gameConfig);
