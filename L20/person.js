class person {
  constructor({ name, email, phone }) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  setphone(phoneno) {
    this.phone = phoneno;
  }

  printme() {
    console.log(this.name + ',' + this.email + ',' + this.phone);
  }
}

export default person;
