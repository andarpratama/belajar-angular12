import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Belajar Angular 12';
  namaDepan = 'Andar';
  namaBelakang = 'Pratama'
  umur = 25
  angka = [1, 5, 7, 3, 8]

  imgUrl = 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe'
  imgUrl2 = 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6'

  isValid = false;

  biodata = {
    namaDepan: 'Andar',
    namaBelakang: 'Pratama',
    umur: 25
  }
}
