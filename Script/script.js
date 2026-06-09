let students = [
    {
        name: "Rahul",
        marks: 95,
        attendance: true
    },
    {
        name: "Priya",
        marks: 82,
        attendance: true
    },
    {
        name: "Arjun",
        marks: 67,
        attendance: true
    },
    {
        name: "Sneha",
        marks: 40,
        attendance: false
    }
];

function displayResults() {

    let output = document.getElementById("output");

    output.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        let totalMarks = student.marks;

        let grade;
        let result;

        if (totalMarks >= 90) {
            grade = "A";
        }
        else if (totalMarks >= 75) {
            grade = "B";
        }
        else if (totalMarks >= 50) {
            grade = "C";
        }
        else {
            grade = "FAIL";
        }

        if (totalMarks >= 50) {
            result = "PASS";
        } else {
            result = "FAIL";
        }

        console.log("Student Name:", student.name);
        console.log("Marks:", totalMarks);
        console.log("Attendance:", student.attendance);
        console.log("Grade:", grade);
        console.log("Result:", result);
        console.log("---------------------");

        output.innerHTML += `
            <div class="result-card">
                <h3>${student.name}</h3>
                <p><strong>Marks:</strong> ${totalMarks}</p>
                <p><strong>Attendance:</strong> ${student.attendance}</p>
                <p><strong>Grade:</strong> ${grade}</p>
                <p><strong>Result:</strong> ${result}</p>
            </div>
        `;
    }
}