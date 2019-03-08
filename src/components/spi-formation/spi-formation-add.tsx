import { Component, State, Prop } from "@stencil/core";
import {Formation} from "../../global/formation";
import { RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-formation-add",
  styleUrl: "spi-formation-add.scss"
})
export class SpiFormationAdd {

  @State()
  formations: any;
  @State() formation:Formation = null;
  @State() codeFormation: string;
  @State() debutAccreditation:string;
  @State() diplome: string;
  @State() doubleDiplome: string;
  @State() finAccreditation: string;
  @State() n0Annee:number;
  @State() nomFormation: string;
  @State()Method:String="add";
  @Prop() history: RouterHistory;

  vider(){
    return this.history.replace("/formations");
  }

  submitter(){
    let Datapost ={
      codeFormation:this.codeFormation,
      debutAccreditation:this.debutAccreditation,
      nomFormation:this.nomFormation,
      doubleDiplome:this.doubleDiplome,
      n0Annee:this.n0Annee,
      finAccreditation:this.finAccreditation,
      diplome:this.diplome
  };



  let url="https://api-dosispi.cleverapps.io/formations/";
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(Datapost), // body data type must match "Content-Type" header
  })
    .then(response =>
      response.json()

    );
  };
update(){

  let Datapost ={
    codeFormation:this.codeFormation,
    debutAccreditation:this.debutAccreditation,
    nomFormation:this.nomFormation,
    doubleDiplome:this.doubleDiplome,
    n0Annee:this.n0Annee,
    finAccreditation:this.finAccreditation,
    diplome:this.diplome
  };

  let url="https://api-dosispi.cleverapps.io/formations/";
  return fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(Datapost), // body data type must match "Content-Type" header
  })
    .then(response =>
      response.json()

    );
};


envoyer(){

    console.log("envoyer");

     if(this.Method="add")
     {
       console.log("add")
       this.submitter();
     }
     else
     {
       console.log("update")
       this.update();
     }

    this.vider();

  }

  handleChangeNomFormation(event){
    this.nomFormation=event.target.value;
  }
  handleChangeCodeFormation(event){
    this.codeFormation=event.target.value;
  }
  handleChangeDiplome(event){
    this.diplome=event.target.value;
  }
  handleChangeDoubleDiplome(event){
    this.doubleDiplome=event.target.value;
    console.log(this.doubleDiplome)
  }
  handleChangeDebutAccreditation(event){
    this.debutAccreditation=event.target.value;
  }
  handleChangeFinAccreditation(event){
    this.finAccreditation=event.target.value;
  }
  handleChangeN0Annee(event){
    this.n0Annee=event.target.value;
  }

  render() {
return (

    <div>

<div class="columns">
             <div class="column is-one-fifth"/>
             <div class="column is-one-third">
               <div class="field">
                 <label class="label">Nom de Formation</label>
                 <div class="control">
                   <input class="input" onInput={(event) => this.handleChangeNomFormation(event)}
                       value={this.nomFormation}   type="text" placeholder="Nom de Formation"/>
                 </div>
               </div>
             </div>


          <div class="column is-one-third">
            <div class="field">
              <label class="label">Code de Formation</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeCodeFormation(event)}
                       value={this.codeFormation}
                 type="text" placeholder="Code de Formation"/>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-fifth"/>
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Diplome</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeDiplome(event)} type="text"
                       value={this.diplome} placeholder="Diplome"/>
              </div>
            </div>
          </div>


            <div class="column is-one-third">
              <div class="field">
                <label class="label">Numero Anneee</label>
                <div class="control">
                  <input class="input" onInput={(event) => this.handleChangeN0Annee(event)}
                        value={this.n0Annee}   type="number" placeholder="Date fin d'accreditation"/>
                </div>
              </div>
            </div>


        </div>

        <div class="columns">
          <div class="column is-one-fifth"/>
          <div class="column is-one-third">
            <div class="field">
              <label class="label">Date debut d'accreditation</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeDebutAccreditation(event)}
                    value={this.debutAccreditation}  type="date" placeholder="Date debut d'accreditation"/>
              </div>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="field">
              <label class="label">Date fin d'accreditation</label>
              <div class="control">
                <input class="input" onInput={(event) => this.handleChangeFinAccreditation(event)}
                     value={this.finAccreditation}  type="date" placeholder="numero annnee"/>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-fifth"/>
        <div class="column is-one-third">
          <div class="field is-grouped">
            <label class="label">Double Diplome</label> &nbsp;&nbsp;
              <div class="select is-primary">
              <select   onInput={(event) => this.handleChangeDoubleDiplome(event)}>
                <option value="O">Oui</option>
                <option value="N">No</option>
              </select>
            </div>
          </div>

        </div>

            <div class="column is-one-half"></div>
          <div class="column is-one-third">

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-success"  type="submit" onClick={()=>this.envoyer()}>Envoyer</button>
              </div>
              <div class="control">
                <stencil-route-link  url="/formation">
                <button class="button is-danger">Annuler</button>
                </stencil-route-link>
              </div>
            </div>
          </div>
            <div class="column is-one-third"></div>
        </div>
    </div>
)


  }}