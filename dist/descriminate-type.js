"use strict";
function animalCharacteristics(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving Speed ", speed);
}
animalCharacteristics({ type: "bird", flyingSpeed: 500 });
