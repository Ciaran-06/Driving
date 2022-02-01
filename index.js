const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const loader = new THREE.TextureLoader();
var bgTexture = loader.load("./textures/background.jpg");

scene.background = bgTexture;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const plane = new THREE.PlaneGeometry(10, 10);
const pMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const pGeometry = new THREE.Mesh(plane, pMaterial);
pGeometry.rotation.x = -Math.PI / 2;
pGeometry.position.y = -0.5;
scene.add(pGeometry);

camera.position.z = 4;
camera.position.y = 0;
camera.rotation.x = -0.1;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

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
}
animate();