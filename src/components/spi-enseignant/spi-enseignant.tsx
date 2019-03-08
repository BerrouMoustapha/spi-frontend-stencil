import { Component, State } from "@stencil/core";

@Component({
    tag: "spi-enseignant",
    styleUrl: "spi-enseignant.scss"
})
export class SpiEnseignant {

    @State()
    enseignants: any;
    componentWillLoad() {
        return fetch("https://api-dosispi.cleverapps.io/enseignants")
            .then(response => response.json())
            .then(data => {
                this.enseignants = data;
            });
    }

    delete(item) {
        return fetch("https://api-dosispi.cleverapps.io/enseignants/", {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item),
        }).then(() => { location.href = '/enseignant'; }
        ).catch((error) => {
            alert(' Can not delete ');
            console.error(error);
        });
    }

    render() {
        return (

            <div class="columns">
                <div class="column is-three-fifths is-offset-one-fifth">
                    <br /><br />
                    <center> <h1 class="title is-2 is-centered">Liste des Enseignants </h1> </center>
                    <br />
                    <center >
                        <stencil-route-link url={"/enseignant/add"} >
                            <span class="button is-dark  ">
                                <span class="icon">
                                    <i class="fas fa-plus-circle"></i>
                                </span>
                                <span>Ajouter Nouveau Enseignant</span>
                            </span>
                        </stencil-route-link>

                    </center>
                    <br />
                    {this.enseignants.map(item =>
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    <i class="fas fa-graduation-cap"></i> &nbsp; Enseignant
             </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                                </a>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <center>  <strong> <i class="fas fa-fingerprint"></i> &nbsp; Numero Enseignant : </strong> {item.noEnseignant} <br />
                                        <strong> <i class="fas fa-user-tie"></i> &nbsp; Nom Enseignant : </strong> {item.nom + " " + item.prenom} <br />
                                        <strong> <i class="fas fas fa-at"></i> &nbsp; email Personnel :</strong> {item.emailPerso} <br />
                                    </center>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <br />
                                &nbsp;
             <span class="card-footer-item">
                                    <stencil-route-link url={"/formation/" + item.noEnseignant} >
                                        <button class="button is-success"> <i class="fas fa-info"></i> &nbsp; Details </button>
                                    </stencil-route-link>
                                </span>
                                <span class="card-footer-item">
                                    <button class="button is-danger" onClick={() => this.delete(item)}> <i class="fas fa-trash-alt"></i> &nbsp; Supprimer </button>

                                </span>

                                <br />
                            </footer>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}