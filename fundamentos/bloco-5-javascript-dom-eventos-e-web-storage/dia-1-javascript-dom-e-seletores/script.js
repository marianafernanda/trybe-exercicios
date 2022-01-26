let emergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.background = 'purple'
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTasks.length; i += 1) {
    noEmergencyTasks[i].style.background = 'black'
}

let emergencyTasks1 = document.getElementsByClassName('emergency-tasks');
for (let i = 0; i < emergencyTasks1.length; i += 1) {
    emergencyTasks1[i].style.background = 'salmon'
}

let noEmergencyTasks1 = document.getElementsByClassName('no-emergency-tasks');
for (let i = 0; i < noEmergencyTasks1.length; i += 1) {
    noEmergencyTasks1[i].style.background = 'yellow'
}
