// TYPING EFFECT

const typingText = [
    "Computer Science Student",
    "Frontend Developer",
    "Java Programmer",
    "Creative Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === typingText.length){
        count = 0;
    }

    currentText = typingText[count];

    letter = currentText.slice(0, ++index);

    const typing = document.getElementById("typing");

    if(typing){
        typing.textContent = letter;
    }

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1500);

    }
    else{

        setTimeout(type,100);

    }

})();


// MUSIC

const music = document.getElementById("bgMusic");

const musicToggle = document.getElementById("musicToggle");

let playing = false;

if(music){

    music.volume = 0.3;

}

const clickSound = new Audio("assets/click.mp3");


// DARK MODE

const themeToggle = document.getElementById("themeToggle");

// LOAD SAVED THEME

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

    if(themeToggle){
        themeToggle.innerHTML = "☀️";
    }

}

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        clickSound.play();

        document.body.classList.toggle("light-mode");

        // SAVE THEME

        if(document.body.classList.contains("light-mode")){

            localStorage.setItem("theme","light");

            themeToggle.innerHTML = "☀️";

        }
        else{

            localStorage.setItem("theme","dark");

            themeToggle.innerHTML = "🌙";

        }

    });

}


// MUSIC BUTTON

if(musicToggle){

    musicToggle.addEventListener("click", () => {

        clickSound.play();

        if(!playing){

            music.play();

            musicToggle.innerHTML = "🔊";

            playing = true;

        }
        else{

            music.pause();

            musicToggle.innerHTML = "🎵";

            playing = false;

        }

    });

}


// PARTICLES

tsParticles.load("particles-js", {

    particles: {

        number:{
            value:60
        },

        color:{
            value:"#00f0ff"
        },

        links:{
            enable:true,
            color:"#7b61ff"
        },

        move:{
            enable:true,
            speed:2
        },

        size:{
            value:3
        }

    }

});

// =========================
// THREE JS 3D OBJECT
// =========================

const threeContainer = document.getElementById("three-container");

if(threeContainer){

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        1,
        0.1,
        1000
    );

    const renderer = new THREE.WebGLRenderer({
        alpha:true,
        antialias:true
    });

    renderer.setSize(400,400);

    threeContainer.appendChild(renderer.domElement);

    // GEOMETRY

    const geometry = new THREE.TorusKnotGeometry(
        1,
        0.35,
        100,
        16
    );

    // MATERIAL

    const material = new THREE.MeshStandardMaterial({
        color:0x00f0ff,
        emissive:0x7b61ff,
        metalness:0.8,
        roughness:0.2
    });

    const torusKnot = new THREE.Mesh(
        geometry,
        material
    );

    scene.add(torusKnot);

    // LIGHTS

    const pointLight = new THREE.PointLight(
        0xffffff,
        2
    );

    pointLight.position.set(5,5,5);

    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(
        0xffffff,
        0.5
    );

    scene.add(ambientLight);

    camera.position.z = 3;

    // ANIMATION

    function animate(){

        requestAnimationFrame(animate);

        torusKnot.rotation.x += 0.01;

        torusKnot.rotation.y += 0.01;

        renderer.render(scene,camera);

    }

    animate();

}