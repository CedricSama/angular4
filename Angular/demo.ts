let x = 1;
export class Class1 {
    user: User = {
        nom: "",
        prenom: "",
        age: 10,
        login: "",
        password: ""
    };
    public prop1: string = "";
    private prop2: number = 0;
    protected prop3: boolean = true;
    prop4: object = {};
    prop5: any = true;
    Arrayprop = [];
    Array1: string[] = ["chaines ", "de carracteres"];
    Array2: number[] = [1, 2];
    Array3: boolean[] = [];
    Array4: object[] = [];
    Array5: any[] = [];

    constructor() {
        //ici instantiation de tous ce que la class need
        this.prop1 = "Valeur apres Constructeur"
        this.methodes();
    };

    methodes(): void {
    };

    OnMouseOver() {};

    OnClick() {};
}

interface User {
    nom: string;
    prenom: string;
    age: number;
    login: string;
    password: string;
}

//extand -- recopie les props du parent
interface UserPlus extends User{
    PrivilageKey:string;
}