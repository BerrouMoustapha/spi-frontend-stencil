import { Component, State,Prop } from "@stencil/core";
import { RouterHistory } from '@stencil/router';

@Component({
  tag: "spi-formation",
  styleUrl: "spi-formation.scss"
})
export class SpiFormation {
  @Prop() history: RouterHistory;
  @State()
  formations: any;
  componentWillLoad() {
    return  fetch("https://api-dosispi.cleverapps.io/formations")
        .then(response => response.json())
        .then(data => {
          this.formations = data;});
  }

  delete(item) {
    return fetch("https://api-dosispi.cleverapps.io/formations/", {
      method: 'DELETE',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item),
    }).then(() => {this.history.goBack();}
    ).catch((error) => {
      alert(' Can not delete ');
      console.error(error);
    });
  }



  render() {
    return (
      
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
      <br/><br/>
              <center> <h1 class="title is-2 is-centered">Liste des Formations </h1> </center>
                    <br />
                    <center >
                        <stencil-route-link url={"/formation/add"} >
                            <span class="button is-dark  ">
                                <span class="icon">
                                    <i class="fas fa-plus-circle"></i>
                                </span>
                                <span>Ajouter Nouveau Formation</span>
                            </span>
                        </stencil-route-link>

                    </center>
                    <br />
          {this.formations.map(item =>
           <div class="card">
           <header class="card-header">
             <p class="card-header-title">
               <i class="fas fa-graduation-cap"></i> &nbsp; Formation
             </p>
             <a href="#" class="card-header-icon" aria-label="more options">
             </a>
           </header>
           <div class="card-content">
             <div class="content">
               <center>  <strong> <i class="fas fa-fingerprint"></i> &nbsp; Code Formation : </strong> {item.codeFormation} <br/>
                 <strong> <i class="fas fa-book-open"></i> &nbsp; Nom Formation : </strong> {item.nomFormation} <br/>
                 <strong> <i class="fas fa-calendar-check"></i> &nbsp; debut d'Accreditation :</strong> {item.debutAccreditation} <br/>
               </center>
             </div>
           </div>
           <footer class="card-footer">
             <br/>
             &nbsp;
             <span class="card-footer-item">
                  <stencil-route-link url={"/formation/detail/"+item.codeFormation} >
                    <button class="button is-success"> <i class="fas fa-info"></i> &nbsp; Details </button>
                  </stencil-route-link>
             </span>
             <span class="card-footer-item">
                  <button class="button is-danger" onClick={()=>this.delete(item)}> <i class="fas fa-trash-alt"></i> &nbsp; Supprimer </button>
                
             </span>

             <br/>
           </footer>
         </div>
          )}
      </div>
      </div>
    );}
}