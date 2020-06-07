import { Component, OnInit, Input } from '@angular/core';
import { TennisPlayer } from '../tennisPlayers';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})

export class PlayerDetailComponent implements OnInit {
  @Input() player: TennisPlayer;

  constructor() { }

  ngOnInit() {}

}
