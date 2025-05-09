// 1. Menghitung luas persegi panjang
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(5, 3)); // Output: 15

// 2. Menghitung diameter, keliling, dan luas lingkaran
function circleProperties(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);
    return {
        diameter: diameter,
        circumference: circumference.toFixed(4),
        area: area.toFixed(3)
    };
}
console.log(circleProperties(5)); // Output: { diameter: 10, circumference: 31.4159, area: 78.539 }

// 3. Menentukan sudut ketiga dari segitiga jika dua sudut diberikan
function thirdAngle(angle1, angle2) {
    return 180 - (angle1 + angle2);
}
console.log(thirdAngle(80, 65)); // Output: 35

// 4. Menghitung selisih hari antara dua tanggal
function dateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let diffTime = Math.abs(d2 - d1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
console.log(dateDifference("2024-03-19", "2024-03-21")); // Output: 2

// 5. Mencetak inisial nama dalam huruf kapital
function nameInitials(name) {
    let words = name.split(" ");
    let initials = words.map(word => word.charAt(0).toUpperCase()).join("");
    return initials;
}
console.log(nameInitials("John Doe")); // Output: JD

