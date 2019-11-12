const classA = [
    {
        name: 'Kaline',
        grade: 9.8
    },

    {
        name: 'Caio',
        grade: 10
    },

    {
        name: 'kiki',
        grade: 2
    }
]

const classB = [
    {
        name: 'Lucky',
        grade: 9.8
    },

    {
        name: 'lola',
        grade: 5
    },

    {
        name: 'belinha',
        grade: 2
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMenssage(average, group) {

    if (average >= 7) {
        console.log(`${group} average: ${average}. Congratulations!!`)
    } else {
        console.log(`${group} average: ${average}. Is not good.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 7) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {

    if (student.flunked) {
        console.log(`The student ${student.name} is flunked`)
    }
}

function studentsReprovados(students) {

    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMenssage(average1, 'class A')
sendMenssage(average2, 'class B')

studentsReprovados(classA)
studentsReprovados(classB)