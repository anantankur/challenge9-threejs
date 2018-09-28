const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer( {alpha: true} );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
} )

controls = new THREE.OrbitControls( camera, renderer.domElement );



const geometry = new THREE.SphereGeometry( 20, 11, 5, 0, 6.3, 2, 3.1 );
const material = new THREE.MeshPhongMaterial( {color: 0xe2ad44, wireframe: true} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
sphere.position.set(0, -0.7, 0);

sphere.rotation.x=-29.8;

camera.position.z = 50;

//light
const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 4 );
light.position.set( -40, 0, 0 );


scene.add(light);


//seconds hand
const line1 = new THREE.BoxGeometry( 16, 0.6, 1 );
const materialCube1 = new THREE.MeshBasicMaterial( {color: 0xf45c41} );
const cube1 = new THREE.Mesh( line1, materialCube1 );
scene.add( cube1 )


line1.applyMatrix( new THREE.Matrix4().makeTranslation(-8, 0, 4) );

cube1.position.x = 0;
cube1.rotateZ(-1.52);

const pivot1 = new THREE.Object3D();
pivot1.add( cube1 );

scene.add( pivot1 );

//minute hand
const line2 = new THREE.BoxGeometry( 14, 0.6, 1 );
const materialCube2 = new THREE.MeshBasicMaterial( {color: 0x9e44e2} );
const cube2 = new THREE.Mesh( line2, materialCube2 );
scene.add( cube2 )


line2.applyMatrix( new THREE.Matrix4().makeTranslation(-6, 0, 3) );

cube2.position.x = 0;
cube2.rotateZ(-1.52);

const pivot2 = new THREE.Object3D();
pivot2.add( cube2 );

scene.add( pivot2 );

//hour hand
const line3 = new THREE.BoxGeometry( 9, 0.6, 1 );
const materialCube3 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const cube3 = new THREE.Mesh( line3, materialCube3 );
scene.add( cube3 )


line3.applyMatrix( new THREE.Matrix4().makeTranslation(-5.1, 0, 2) );

cube3.position.x = 0;
cube3.rotateZ(-1.52);

const pivot3 = new THREE.Object3D();
pivot3.add( cube3 );

scene.add( pivot3 );

setInterval(() => {
    pivot1.rotateZ(-0.08);
    pivot2.rotateZ(-0.004);
    pivot3.rotateZ(-0.00016);
    sphere.rotateY(0.1);
}, 1000)


// let update = () => {

    
    
// }

//draw scene
let render = () => {

    renderer.render( scene, camera );
}

//game loop --> update render repeat
let GameLoop = () => {

    requestAnimationFrame( GameLoop )

    // update();
    render();
}

GameLoop();