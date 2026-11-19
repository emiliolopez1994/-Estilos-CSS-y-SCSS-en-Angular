import { Component, ViewEncapsulation } from '@angular/core';

/** Demostración explícita de ViewEncapsulation.None: reglas que se aplican a toda la página. */
@Component({
  selector: 'app-encapsulamiento-global',
  standalone: true,
  template: '<span class="insignia-global">ViewEncapsulation.None</span>',
  styleUrls: ['./encapsulamiento-global.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EncapsulamientoGlobalComponent {}
