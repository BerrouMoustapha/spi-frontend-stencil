import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main class="">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url="/candidat" component="spi-candidat" exact={true}/>
              <stencil-route url="/formation" component="spi-formation" exact={true} />
              <stencil-route url="/formation/detail/:id" component="spi-formation-detail" />
              <stencil-route url="/formation/add" component="spi-formation-add" exact={true} />
              <stencil-route url="/promotion" component="spi-promotion"exact={true} />
              <stencil-route url="/enseignant" component="spi-enseignant" exact={true}/>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
