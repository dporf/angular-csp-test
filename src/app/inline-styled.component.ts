import { Component } from '@angular/core';

@Component({
  selector: 'inline-styled',
  host: {
    style: 'display:none',
  },
  templateUrl: './inline-styled.component.html',
})
export class InlineStyledComponent {}
