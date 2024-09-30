function magicalSortingHat(students) {
    return students.map(student => {
        let house = '';
        if (student.length < 6) {
            house = "Gryffindor";
        } else if (student.length < 8) {
            house = "Hufflepuff";
        } else if (student.length < 12) {
            house = "Ravenclaw";
        } else {
            house = "Slytherin";
        }
        return { name: student, house: house };
    });
}

const students = ['Harry', 'Hermione', 'Ron', 'Draco', 'Neville', 'Luna', 'Cedric'];
const sortedStudents = magicalSortingHat(students);

console.log(sortedStudents);
