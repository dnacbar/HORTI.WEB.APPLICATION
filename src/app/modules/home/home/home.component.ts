import { CitySignature } from './../../../model/signature/city-signature';
import { DataService } from './../../../service/_shared/_data.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public activeSlideIndex = 0;

  public slides = [
    { image: 'assets/assassins_creed.jpg', text: 'Assassins Creed' },
    { image: 'assets/counter_strike.jpg', text: 'CS:GO' },
    { image: 'assets/magic.jpg', text: 'Magic' },
    { image: 'assets/the_faunt.jpg', text: 'Cosmic' }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  public deletar(): void {
    let signature = new CitySignature();
    signature.City = 'Barra';
    this.dataService.DeleteObject(environment.urlBaseCoreCommand + 'Client', signature)
        .subscribe(x => console.log(x));
  }
}
