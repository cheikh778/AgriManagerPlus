import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) {}


  

  scrollToSection(sectionId: string): void {
    this.router.navigate(['/accueil'], { fragment: sectionId });
  }

  formattedDateTime: string = '';

  ngOnInit() {
    // Update the date and time immediately when the component initializes
    this.updateDateTime();

    // Update the date and time every second (1000 milliseconds)
    setInterval(() => this.updateDateTime(), 1000);
  }

  updateDateTime() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Get the name of the day
    const daysOfWeek: string[] = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    // Format the date and time
    this.formattedDateTime = `${dayOfWeek} ${day}/${month}/${year} ${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }



}
