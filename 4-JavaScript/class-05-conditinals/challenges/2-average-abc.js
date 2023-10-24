function convertAverageToABC(average) {
    if (typeof average === "string") {
        let newAverage = Number(average.replace(",", ));
        if (average >= 90 && average <= 90) {
    }
        return "A";
} else if ( average >= 80 && average < 90) {
    return "B";
} else if ( average >= 70 && average < 80) {
    return "C";
} else if ( average >= 60 && average < 70) {
    return "D";
} else if ( average >= 0 && average < 90) {
    return "F";
} else if ( average >= 80 && average < 90) {
    return "B";
}
}

const averageStudent = "a95,5";
const averageStudentABC =
convertAverageToABC(averageStudent);

switch (averageStudentABC) {
    case "A":
        console.log("Excelente, aprovado com A!");
        break;
    case "B":
        console.log("Muito bem, aprovado com B!");
        break;
        case "C":
        console.log("Aprovado com C!");
        break;
        case "D":
        console.log("Foi quase, reprovado com D!");
        break;
        case "F":
        console.log("Precisa estudar mais, reprovado com F");
        break;

        case "Média inválida":
            console.log("ABC, Nota Inválida");
}