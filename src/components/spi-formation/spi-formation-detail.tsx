import {Component, Method, Prop, State} from "@stencil/core";
import {Formation} from "../../global/formation";
import {MatchResults} from "@stencil/router";


@Component({
  tag: "spi-formation-detail",
  styleUrl: "spi-formation-detail.scss",

})
export class SpiFormation {

  @State() formation:Formation;
  @Prop() match: MatchResults;
  @Method()
  componentWillLoad() {
    let id=this.match.params.id;
    return fetch('https://api-dosispi.cleverapps.io/formations/'+id)
      .then(response => response.json())
      .then(data => {
        this.formation= data;
      })
  }

  render() {
    return (
      
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
        <br/><br/>
                
            
             <div class="card">
             
             <header class="card-header">
               
               <p class="card-header-title">
               <center>
                 <i class="fas fa-graduation-cap"></i> &nbsp; Formation
                 </center>
               </p>
               <a href="#" class="card-header-icon" aria-label="more options">
               </a>
               
             </header>
             <div class="card-content">
               <div class="content">
                 <center>  <strong> <i class="fas fa-fingerprint"></i> &nbsp; Code Formation : </strong> {this.formation.codeFormation} <br/>
                   <strong> <i class="fas fa-book-open"></i> &nbsp; Nom Formation : </strong> {this.formation.nomFormation} <br/>
                   <strong> <i class="fas fa-user-graduate"></i> &nbsp; Diplome :</strong> {this.formation.diplome} <br/>
                   <strong> <i class="fas fa-check-double"></i> &nbsp; Double Diplome :</strong> {this.formation.doubleDiplome} <br/>
                   <strong> <i class="fas fa-calendar-check"></i> &nbsp; debut d'Accreditation :</strong> {this.formation.debutAccreditation} <br/>
                   <strong> <i class="fas fa-calendar-check"></i> &nbsp; Fin d'Accreditation :</strong> {this.formation.finAccreditation} <br/>
                   <strong> <i class="fas fa-list-ol"></i> &nbsp; Nombre d'Année :</strong> {this.formation.n0Annee} <br/>
                   
                 </center>
               </div>
             </div>
             <footer class="card-footer">
               <br/>
               &nbsp;
               <span class="card-footer-item">
                  <stencil-route-link url={"/formation"} >
                    <button class="button is-success"> <i class="fas fa-undo-alt"></i> &nbsp; Retourner </button>
                  </stencil-route-link>
             </span>
               <br/>
             </footer>
           </div>
            
        </div>
        </div>
      );
}
}
  