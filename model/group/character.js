export class Characters {
  constructor(name, attack, combo) {
    this._name = name || "soldier";
    this._attack = attack || 1;
    this._combo = combo || 1;
  }

  get name() {
    return this._name;
  }

  get attack() {
    return this._attack;
  }

  get combo() {
    return this._combo;
  }
}
