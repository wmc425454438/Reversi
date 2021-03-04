export class Player {
    constructor(name, hp, chessType) {
      this._name = name || "player";
      this._hp = hp || 120;
      this._chessType = chessType; // 不能为空，且一个为1一个为2
    }

    get name() {
      return this._name;
    }

    get hp() {
      return this._hp;
    }

    get chessType() {
      return this._chessType;
    }
  }