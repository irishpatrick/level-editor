import {Util} from "./util";
import {Viewport} from "./viewport";
declare var ace: any;

let editor: any = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/json");
editor.resize();
let viewport: Viewport = new Viewport();
let canvas: any = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let now: number, then: number, delta: number;
let mouse: any = {x: 0, y: 0};

//canvas.height = 450;

window.addEventListener('resize', () => {
    
});

canvas.addEventListener('mousemove', (e: any) => {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
    document.getElementById('mouse').innerHTML = mouse.x + ',' + mouse.y;
});

canvas.addEventListener('mousedown', (e: any) => {

});

canvas.addEventListener('mouseup', (e: any) => {

});

function init() {
    Util.setClearColor(180,180,180);

    then = Date.now();
}

function update() {
    now = Date.now();
    delta = (now - then) / 1000.0;
    then = now;


}

function draw() {
    requestAnimationFrame(draw);

    Util.clear(ctx);
    update();
}

init();
draw();