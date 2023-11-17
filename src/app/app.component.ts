import { Component, Renderer2, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AgriManagerPlus';


  constructor(private renderer: Renderer2, private el: ElementRef) {


  }

  ngOnInit() {
    setTimeout(() => {
      this.hideLoader();
    }, 2000);
  }

  hideLoader() {
    const loader = this.el.nativeElement.querySelector('.loader-wrapper');
    this.renderer.setStyle(loader, 'display', 'none');
  }

}
