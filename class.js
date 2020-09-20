class student {
    constructor(sId, sName) {
        this.sID = sId;
        this.sName = sName;
        this.schoolName = "I Love You";
    }
}
const student1 = new student(15, "Sudipta Shikder");
const student2 = new student(02, "Partho Shikder");
console.log(student1.schoolName, student2.schoolName);
console.log(student1, student2);