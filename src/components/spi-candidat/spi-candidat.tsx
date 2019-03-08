import { Component, State } from "@stencil/core";

@Component({
    tag: "spi-candidat",
    styleUrl: "spi-candidat.scss"
})
export class SpiCandidat {

    @State()
    candidats: any;
    componentWillLoad() {
        return fetch("https://api-dosispi.cleverapps.io/candidats")
            .then(response => response.json())
            .then(data => {
                this.candidats = data;
            });
    }

    delete(item) {
        return fetch("https://api-dosispi.cleverapps.io/candidats/", {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item),
        }).then(() => { location.href = '/candidat'; }
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
                    <center> <h1 class="title is-2 is-centered">Liste des Candidats </h1> </center>
                    <br />
                    <center >
                        <stencil-route-link url={"/candidat/add"} >
                            <span class="button is-dark  ">
                                <span class="icon">
                                    <i class="fas fa-plus-circle"></i>
                                </span>
                                <span>Ajouter Nouveau Candidat</span>
                            </span>
                        </stencil-route-link>

                    </center>
                    <br />
                    {this.candidats.map(item =>
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    <i class="fas fa-graduation-cap"></i> &nbsp; Candidat
             </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                                </a>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <center>  <strong> <i class="fas fa-fingerprint"></i> &nbsp; Numero Candidat : </strong> {item.noCandidat} <br />
                                        <strong> <i class="fas fa-user-tie"></i> &nbsp; Nom Candidat : </strong> {item.nom + " " + item.prenom} <br />
                                        <strong> <i class="fas fas fa-at"></i> &nbsp; email Candidat :</strong> {item.email} <br />
                                    </center>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <br />
                                &nbsp;
             <span class="card-footer-item">
                                    <stencil-route-link url={"/candidat/" + item.noCandidat} >
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