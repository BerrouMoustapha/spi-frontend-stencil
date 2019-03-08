import { Component } from "@stencil/core";

@Component({
  tag: "spi-home",
  styleUrl: "spi-home.scss"
})
export class SpiHome {
render() {
    return (
        <section class="hero is-danger is-centered">

          <div class="hero-body">
            <div class="container has-text-centered">
              <div class="column is-6 is-offset-3">
                <h1 class="title">
                  Projet Agile SPI
                          </h1>
                <h2 class="subtitle">
                  Ce projet vient dans le cadre de la formation DOSI 2018/2019
                          </h2>
                <div class="box">
                  <div class="field is-grouped">
                    <p class="control is-expanded">

                      <input class="input" type="text" placeholder="Entrer le code de Formation" />
                    </p>
                    <p class="control">
                      <a class="button is-info">Valider</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
