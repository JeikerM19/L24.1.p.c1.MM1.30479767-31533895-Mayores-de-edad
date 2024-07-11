export default class Cl_personas {
    constructor(n, e) {
        this.nom = n;
        this.edad = e;
    }
    get nom() {
        return this._nom;
    }
    set nom(n) {
        this._nom = n;
    }

    get edad() {
        return this._edad;
    }
    set edad(e) {
        this._edad = e;
    }
}