import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { environment } from '../../../../../environments/environment';
import { Redes } from '../../../../core/interface/common/redes';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private _redes = environment.redes as Redes;

  constructor(
    private library: FaIconLibrary
  ) {
    library.addIcons(faTwitter, faFacebook, faInstagram);
  }

  get redes(): Redes {
    return this._redes;
  }
}
