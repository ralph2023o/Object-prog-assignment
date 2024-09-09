class student{
    constructor(name , OOP, EDP, MULTIMEDIA, ELECTIVE, NETWORKING , DATA){
        this.name = name;
        this.OOP = OOP;
        this.EDP = EDP;
        this.MULTIMEDIA = MULTIMEDIA;
        this.ELECTIVE = ELECTIVE;
        this.NETWORKING = NETWORKING;
        this.DATA = DATA;
        
    }

    displaystudent(){
        console.log("Student Name:                   " + this.name);
        console.log("Object Oriented Programming:    " + this.OOP);
        console.log("Event Driven Programming:       " + this.EDP);
        console.log("Multimedia Systems Development: " + this.MULTIMEDIA);
        console.log("Web Systems and Technologies:   " +this.ELECTIVE);
        console.log("Fundamentals of Networking:     " + this.NETWORKING);
        console.log("Data Structures and Algorithm:  " +this.DATA);


    }
    gwa(){
        let average = this.OOP + this.EDP + this.MULTIMEDIA + this.ELECTIVE + this.NETWORKING +  this.DATA;
        let gwa = average / 6;
        console.log("General wieghted Average        " + gwa                 )
    }
}
const student1 =  new student("Ralph" , 1.25 , 1.00 , 1.00 , 1.00 , 2.00 , 1.25);

student1.displaystudent();
student1.gwa();