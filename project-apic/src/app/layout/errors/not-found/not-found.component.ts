import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram, faPinterest,
  faStackOverflow,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faTwitter, faStackOverflow, faFacebook, faGoogle, faGithub, faInstagram, faPinterest)
  }
}
