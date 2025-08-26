// Sample student data
const students = [
  { roll: "101", name: "Ali Khan", marks: 87, grade: "A" },
  { roll: "102", name: "Sara Ahmed", marks: 91, grade: "A+" },
  { roll: "103", name: "Usman Raza", marks: 76, grade: "B" },
  { roll: "104", name: "Fatima Noor", marks: 64, grade: "C" },
  { roll: "105", name: "Zain Malik", marks: 55, grade: "D" }
];

function searchStudent() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultDiv = document.getElementById('result');

  const student = students.find(
    s => s.roll === query || s.name.toLowerCase() === query
  );

  if (student) {
    resultDiv.innerHTML = `
      <h2>Result Found:</h2>
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>Roll No:</strong> ${student.roll}</p>
      <p><strong>Marks:</strong> ${student.marks}</p>
      <p><strong>Grade:</strong> ${student.grade}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">No student found with that Roll No or Name.</p>`;
  }
}
