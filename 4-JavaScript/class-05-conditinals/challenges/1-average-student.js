function studentAverage(grade1, grade2) {
    return (grade1 + grade2) / 2
}

const average = studentAverage(7, 3);

if (average >= 7) {
    console.log("Aprovado")
}  else if (average >=4) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}