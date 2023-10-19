var student = {
    name: "Baitur",
    surname: "Tashbaev",
    group: "AIN",
    course: 2,
    verheiratet: false,
    direct: "Software",
    progLanguage: "Java, Python, SQL"
};

document.getElementById("students-name").textContent = student.name;
document.getElementById("students-surname").textContent = student.surname;
document.getElementById("students-group").textContent = student.group;
document.getElementById("students-course").textContent = student.course;
document.getElementById("students-verheiratet").textContent = student.verheiratet;
document.getElementById("students-direct").textContent = student.direct;
document.getElementById("students-progLanguage").textContent = student.progLanguage;


console.log("Name: " + student.name)
console.log("Surname: " + student.surname)
console.log("Group: " + student.group)
console.log("Course: " + student.course)
console.log("Verheiratet: " + student.verheiratet)
console.log("Directions: " + student.direct)
console.log("Programming Language: " + student.progLanguage)

