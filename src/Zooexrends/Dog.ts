import {Zoo} from "./Zoo";

export class Dog extends Zoo {
    bark():void {
        console.log(` ${this.name} is barking `);
    }
}

export class Cat extends Zoo {
    meow():void {
        console.log(` ${this.name} is meowing `);
    }
}