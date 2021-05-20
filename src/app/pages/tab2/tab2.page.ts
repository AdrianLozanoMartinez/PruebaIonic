import { Component } from '@angular/core';
import { DeseoService } from '../../services/deseo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public variable_servicio: DeseoService ) {}

}
