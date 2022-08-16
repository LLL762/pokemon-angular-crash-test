

export class Pokemon {
    id: number;
    name: string;
    hp: number;
    cp: number;
    iconUrl: string;
    types: Array<string>;
    created: Date;

    constructor(
        name: string,
        hp: number,
        cp: number,
        iconUrl: string,
        types: Array<string>,
        created: Date,
        id?: number
    ) {
        this.name = name
        this.hp = hp
        this.cp = cp
        this.iconUrl = iconUrl
        this.types = types
        this.created = created
        if (id) {
            this.id = id
        }
    }



}