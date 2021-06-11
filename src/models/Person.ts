class Person {
	id: number;
	name: string;
	image: string;
	constructor({ id, name, image }) {
		this.id = id;
		this.name = name;
		this.image = image.original;
	}
}
export default Person;
