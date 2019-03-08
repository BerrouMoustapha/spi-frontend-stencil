import { Component, State } from "@stencil/core";

@Component({
  tag: "spi-promotion",
  styleUrl: "spi-promotion.scss"
})
export class SpiPromotion {

  @State()
  promotions: any;
  componentWillLoad() {
    return  fetch("https://api-dosispi.cleverapps.io/promotions")
        .then(response => response.json())
        .then(data => {
          this.promotions = data;});
  }

  delete(item) {
    return fetch("https://api-dosispi.cleverapps.io/promotions/", {
      method: 'DELETE',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item),
    }).then(() => {location.href='/promotion';}
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
      <center> <h1 class="title is-2 is-centered">Liste des Promotions </h1> </center>
                    <br />
                    <center >
                        <stencil-route-link url={"/promotion/add"} >
                            <span class="button is-dark  ">
                                <span class="icon">
                                    <i class="fas fa-plus-circle"></i>
                                </span>
                                <span>Ajouter Nouveau Promotion</span>
                            </span>
                        </stencil-route-link>

                    </center>
                    <br />
        
          {this.promotions.map(item =>
           <div class="card">
           <header class="card-header">
             <p class="card-header-title">
               <i class="fas fa-graduation-cap"></i> &nbsp; Promotion
             </p>
             <a href="#" class="card-header-icon" aria-label="more options">
             </a>
           </header>
           <div class="card-content">
             <div class="content">
               <center>  <strong> <i class="fas fa-fingerprint"></i> &nbsp;sigle Promotion: </strong> {item.siglePromotion} <br/>
                 <strong> <i class="fas fa-book-open"></i> &nbsp; Code Formation : </strong> {item.codeFormation} <br/>
                 <strong> <i class="fas fa-calendar-check"></i> &nbsp; date de Rentree :</strong> {item.dateRentree} <br/>
               </center>
             </div>
           </div>
           <footer class="card-footer">
             <br/>
             &nbsp;
             <span class="card-footer-item">
                  <stencil-route-link url={"/promotion/"+item.id} >
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