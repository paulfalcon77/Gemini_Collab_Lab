export class Zoo {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makesound() {
        console.log(`Vois of animal: ${this.name}`);
    }
}