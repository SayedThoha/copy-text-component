import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CopyComponent } from './components/copy/copy.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CopyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'copy-text';
}
