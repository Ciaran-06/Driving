import * as three from 'three'
import { OrbitControls } from 'https://rawgit.com/mrdoob/three.js/dev/examples/jsm/controls/OrbitControls.js';

// semi-constant
var UNITSIZE = 250;
var WALLHEIGHT = UNITSIZE / 3
var units = mapW;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();
var bgTexture = loader.load("./textures/background.jpg");

scene.background = bgTexture;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);*/


const flor = new THREE.BoxGeometry(1, 12, 1);
const fMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const floor = new THREE.Mesh(flor, fMaterial);

scene.add(floor);

/*const plane = new THREE.PlaneGeometry(10, 10);
const pMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const pGeometry = new THREE.Mesh(plane, pMaterial);
pGeometry.rotation.x = -Math.PI / 2;
pGeometry.position.y = -0.5;
scene.add(pGeometry);*/

var map = [ // 1  2  3  4  5  6  7  8  9
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ], // 0
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, ], // 1
        [1, 1, 0, 0, 2, 0, 0, 0, 0, 1, ], // 2
        [1, 0, 0, 0, 0, 2, 0, 0, 0, 1, ], // 3
        [1, 0, 0, 2, 0, 0, 2, 0, 0, 1, ], // 4
        [1, 0, 0, 0, 2, 0, 0, 0, 1, 1, ], // 5
        [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, ], // 6
        [1, 1, 1, 0, 0, 1, 0, 0, 1, 1, ], // 7
        [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, ], // 8
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ], // 9
    ],
    mapW = map.length,
    mapH = map[0].length;

camera.position.z = 4;
camera.position.y = 0;
camera.rotation.x = -0.1;


function animate() {
    requestAnimationFrame(animate);

    floor.rotation.x += 0.01;
    floor.rotation.y += 0.01;

    render();
};

function render() {
    renderer.render(scene, camera);
};

window.addEventListener('resize', onWindowResize, false)

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
};

animate();