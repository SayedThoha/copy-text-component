import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-copy',
  imports: [FormsModule],
  templateUrl: './copy.component.html',
  styleUrl: './copy.component.css',
})
export class CopyComponent {
  textToCopy: string = '';
  isCopied: boolean = false;
  copyText() {
    if (!this.textToCopy.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please enter some text before copying!',
      });
      return;
    }
    navigator.clipboard
      .writeText(this.textToCopy)
      .then(() => {
        this.isCopied = true;
        Swal.fire({
          icon: 'success',
          title: 'Copied!',
          text: 'Your text has been copied to clipboard.',
          timer: 2000,
          showConfirmButton: false,
        });
        setTimeout(() => {
          this.textToCopy = '';
          this.isCopied = false;
        }, 2000);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Unable to copy text. Please try again.',
        });
        console.log('error copyinng text', err);
      });
  }
}
