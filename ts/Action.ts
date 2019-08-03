class etudiants{


    public  nom : string;
    public prenom: string;
    public age : number;
    public note : number;

 
    constructor(n:string    ,   p:string    ,   a:number, no:number){

        this.nom = n;
        this.prenom = p;
        this.age = a;
        this.note = no;
        
    }


     afficher (){

        console.log('Votre nom est : ' + `${this.nom}`+"\n Votre de prenom :"  + `${this.prenom}`+ "\n Et votre de age :"+ `${this.age}`+ 'Votre note est : ' + `${this.note}`)
    }
    
}


console.log("oubiji");


function traitement() : void {

    let y =   parseInt((document.getElementById('ed')  as HTMLInputElement).value);

for (var p=0;p<y;p++){

    


    let i =   (document.getElementById('p1'+`${p}`)  as HTMLInputElement).value;
    let j =  (document.getElementById('p2'+`${p}`)  as HTMLInputElement).value;
    let k =   parseInt(( document.getElementById('p3'+`${p}`)  as HTMLInputElement).value)
    let h =   parseInt(( document.getElementById('p4'+`${p}`)  as HTMLInputElement).value);



var OP = new etudiants(i,j,k,h);
OP.afficher();


}

}
