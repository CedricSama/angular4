let x = 1;
export class Class1 {
    user: User = {
        nom: "",
        prenom: "",
        age: 25,
        login: "",
        password: ""
    };
    public prop1: string = "";
    private prop2: number = 0;
    protected prop3: boolean = true;
    prop4: Object = 4;
    prop5: any = true;
    Arrayprop = [];
    Arrayprop1: string[] = ["chaines ", "de carracteres"];
    Arrayprop2: number[] = [1, 2];
    Arrayprop3: boolean[] = [];
    Arrayprop4: Object[] = [];
    Arrayprop5: any[] = [];

    constructor() {
        //ici instantiation de tous ce que la class need
        this.prop1 = "Valeur apres Constructeur";
        this.methodes();
    }

    methodes(): void {

    }

    onClick() {

    }

    OnmouseOver() {
    }
}
;


interface User {
    nom: string;
    prenom: string;
    age: number;
    login: string;
    password: string;

}
interface UserPlus extends User{
    PrivilageKEY:string;
}
