const student = {
    name: 'Kadam Ali',
    money: 5000,
    study: 'Math',
    subjects: ['Calculus', 'Algebra', 'Geometry'],
    exam: function () {
        return this.name + ' is participating in exam'
    },
    improveExam: function (subject) {
        this.exam;
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatPlease: function (amount, tips, vat) {
        this.money = this.money - amount - tips - vat;
        return this.money;
    }
}

const output = student.exam();
//console.log(output);
//console.log(student.subjects[2]);

const reExam = student.improveExam('Algebra');
//console.log(reExam);

const remaining = student.treatPlease(1200, 100, 70);
//console.log(remaining);

const dolaRemaining = student.treatPlease(500, 100, 30);
console.log(dolaRemaining);