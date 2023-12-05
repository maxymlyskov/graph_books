// Клас персонажа
class Character {
    constructor(public name: string, public role: string) { }

    toString(): string {
        return `Character { name: '${this.name}', role: '${this.role}' }`;
    }
}

export default Character