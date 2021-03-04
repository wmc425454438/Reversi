import { Characters } from './character.js';

export class ShuGroup extends Characters {
    constructor(name, attack, combo) {
        super(name, attack, combo);
        this._group = 'shu';
    }
}
