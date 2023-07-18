function gradingStudents(grades) {
  const roundedGrades = [];

  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    //console.log("grade" + grade)
    if (grade < 40) {
      grade = 40;
      roundedGrades.push(grade);
    } else {
        
      //console.log("greater than 40")
      const remainder = grade % 5;
      //console.log("remainder " + remainder)
      
      const nextMultipleOf5 = grade + (5 - remainder);
      //console.log("nextMultipleOf5 " + nextMultipleOf5)

      if (remainder > 2) {
          //console.log("less than 3")
        roundedGrades.push(nextMultipleOf5);
      } else {
          //console.log("not less than 3")
        roundedGrades.push(grade);
      }
    }
  }

  //console.log(roundedGrades)
  return roundedGrades;
}
