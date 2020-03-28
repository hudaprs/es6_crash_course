class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password
	}

	static getStatic() {
		console.log('This is static method');
	}

	register() {
		console.log(`${this.name} has been registered`);
	}
}

class Member extends User {
	constructor(name, email, password, memberPackage) {
		super(name, email, password);
		this.memberPackage = memberPackage;
	}

	setMemberPackage() {
		console.log(`${this.name} has been registered as ${this.memberPackage} member`);
	}
}

let member = new Member('Huda Prasetyo', 'huda@email.com', '123', 'Platinum');
member.setMemberPackage()