import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeSlideIndex = 0;

  slides = [
    { image: 'assets/assassins_creed_valhalla_video_game_ragnar_lothbrok-wallpaper-1920x1080.jpg', text: 'Assassins Creed' },
    { image: 'assets/counter_strike_global_offensive_13-wallpaper-1920x1080.jpg', text: 'CS:GO' },
    { image: 'assets/magic_3-wallpaper-1920x1080.jpg', text: 'Magic' },
    { image: 'assets/the_faunt-wallpaper-1920x1080.jpg', text: 'Cosmic' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
