import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav
        class="navbar is-dark has-shadow is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <stencil-route-link url="/">
            <span class="navbar-item">
              <span class="blanche">
              SPI-Projet
             </span>
            </span>
            </stencil-route-link>
            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-content"
              onClick={() => this.toggleBurger()}
              ref={el => (this.burger = el)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div
            id="navbar-content"
            class="navbar-menu"
            ref={el => (this.menu = el)}
          >
            <div class="navbar-start">
              <span class="navbar-item">
                <stencil-route-link url="/candidat" activeClass="none">
                  <span class="has-text-primary">
                   <i class="fas fa-user-graduate"></i>
                  </span>{" "}
                  Candidat
                </stencil-route-link>
                <stencil-route-link url="/promotion" activeClass="none">
                  <span class="has-text-primary">
                  <i class="fas fa-users"></i>
                  </span>{" "}
                  Promotion
                </stencil-route-link>
                <stencil-route-link url="/enseignant" activeClass="none">
                  <span class="has-text-primary">
                  <i class="fas fa-chalkboard-teacher"></i>
                  </span>{" "}
                  Enseignant
                </stencil-route-link>
                <stencil-route-link url="/formation" activeClass="none">
                  <span class="has-text-primary">
                  <i class="fas fa-book"></i>
                  </span>{" "}
                  Formation
                </stencil-route-link>
              </span>

            </div>

          </div>
        </div>
      </nav>
    );
  }
}