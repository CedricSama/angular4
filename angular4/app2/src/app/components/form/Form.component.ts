import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'app-form',
    template: `
        <div *ngIf="visible" class="overLayForm" >
            <form  (submit)="submitFormData($event)">
                <div *ngFor="let field of formFields">
                    <input [(ngModel)]="object[field.name]" *ngIf="field.tag !='textarea'" class="form-control" [type]="field.type" [placeholder]="field.placeholder" [name]="field.name"  [maxLength]="field.maxLength" [value]="field.value">
                    
                    <textarea *ngIf="field.tag == 'textarea'" [(ngModel)]="object[field.name]" [name]="field.name" class="form-control" [placeholder]="field.placeholder" [maxLength]="field.maxLength" [value]="field.value"></textarea>
                </div>

                <br>
                <input class="btn btn-primary" type="submit" value="submit">
            </form>
        </div>
    `,
    styles: [`div.overLayForm {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 2;
        cursor: pointer;

    }

    form {
        text-align: right;
    }
    `]
})
export class FormComponent {

    @Output("onSubmit")
    submitEmitter=new EventEmitter();

    @Input()
    visible: boolean = false;
    titre = "";

    @Input("data")
    object = {};

    @Input()
    formFields: Field[] = [
        {
            tag:'',
            value: "",
            placeholder: "Input Text",
            maxLength: 10,
            type: "text",
            name:"sff"
        },
        {
            tag:   "textarea",
            value: "",
            placeholder: "Text area",
            maxLength: 255,
            type: "text",
            name:"sd"
        }
    ];
    submitFormData(event){
        event.preventDefault();
        this.submitEmitter.emit(this.object);

    }
    constructor() {
    }
}
interface Field {
    tag:string;
    value: string;
    placeholder: string;
    maxLength: number;
    type: string;
    name:string;
}
