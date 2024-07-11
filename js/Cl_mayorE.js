export default class Cl_mayorE{
    constructor() {
        this.contT = 0;
        this.contMayor = 0;
    }
    procesarPersonas(per){
        this.contT ++;
        if(per.edad >= 18){
            this.contMayor++;
        }
    }
    porcMayor(){
        return (this.contMayor * (100/this.contT)).toFixed(2);
    }
}