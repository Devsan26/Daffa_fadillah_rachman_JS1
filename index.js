// if else nested if \\
let x = 10;
if (x > 5) {
    console.log("x lebih besar dari 5");
} else {
    console.log("x tidak lebih besar dari 5");
}

let y = 7;
if (y > 5) {
    if (y === 7) {
        console.log("y adalah 7");
    } else {
        console.log("y bukan 7");
    }
} else {
    console.log("y tidak lebih besar dari 5");
}

// Switch case \\
let dayNumber = 4;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Minggu";
        break;
    case 2:
        dayName = "Senin";
        break;
    case 3:
        dayName = "Selasa";
        break;
    case 4:
        dayName = "Rabu";
        break;
    case 5:
        dayName = "Kamis";
        break;
    case 6:
        dayName = "Jumat";
        break;
    case 7:
        dayName = "Sabtu";
        break;
    default:
        dayName = "Hari tidak valid";
}

console.log("Hari ini adalah " + dayName);

// For statement \\
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// while \\
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// do while \\
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

// Function \\
function sapa(nama) {
    console.log("Halo, " + nama + "!");
}

sapa("Daffa"); 
sapa("fadillah");   
sapa("Rachman");   