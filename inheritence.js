class Parents {
    constructor() {
        this.fatherName = "Partho Sen"
    }
}
class Child extends Parents {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}

const childNames = new Child("SUP");
const childNames1 = new Child("PARTHO");
console.log(childNames.getFullName());
console.log(childNames1.getFullName());