import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="text-white bg-black px-4 py-3">{{ title() }}</div>
  `,
  styles: ``,
})
export class HeaderComponent {
  title = signal('Expense Dashboard');
}
