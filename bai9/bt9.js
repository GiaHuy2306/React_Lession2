const student = {
  name: "Dev",
  age: 20,
  listMonhoc: [
    { subject: "Math", score: 9 },
    { subject: "English", score: 7.5 },
    { subject: "Physics", score: 6 },
    { subject: "Literature", score: 8.5 }
  ]
};

function getStudentSummary(student) {
  const subjects = student.listMonhoc;
  const totalScore = subjects.reduce((sum, item) => sum + item.score, 0);
  const average = +(totalScore / subjects.length).toFixed(2);

  let classification = "";
  if (average >= 8.5) {
    classification = "Học sinh giỏi";
  } else if (average >= 7) {
    classification = "Học sinh khá";
  } else if (average >= 5) {
    classification = "Học sinh trung bình";
  } else {
    classification = "Học sinh yếu";
  }

  let best = subjects[0];
  let worst = subjects[0];

  for (let subject of subjects) {
    if (subject.score > best.score) {
      best = subject;
    }
    if (subject.score < worst.score) {
      worst = subject;
    }
  }

  // Xuất kết quả
  console.log(`${student.name} is ${student.age} years old.`);
  console.log(`Average score: ${average} → ${classification}`);
  console.log(`Best subject: ${best.subject} (${best.score})`);
  console.log(`Weakest subject: ${worst.subject} (${worst.score})`);
}
getStudentSummary(student);
