import person from './person'
class student extends person {
    constructor({
        name,
        email,
        phone,
        studentid,
        courses
    }) {
        super({
            name,
            email,
            phone
        })

        this.studentid = studentid
        this.courses = courses

    }

    who() {
        console.log(this)
    }
}

export default student