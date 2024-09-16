import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone:true,
  template: `
    <div [innerHTML]="svgContent"></div>
  `,
  styles: ['div { width: 24px; height: 24px; }']
})
export class SvgIconComponent {
  @Input() iconUrl: string = '';

  svgContent: string = '';

  ngOnInit() {
    fetch(this.iconUrl)
      .then(res => res.text())
      .then(svg => this.svgContent = svg);
  }
}
