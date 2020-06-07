import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from '../tennisPlayers';
import { PLAYERS } from '../mock-players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PalyersComponent implements OnInit {

  players = PLAYERS;

  selectedPlayer: TennisPlayer;

  constructor() { }

  ngOnInit() {
  }

  onSelect(tplayer: TennisPlayer): void {
    this.selectedPlayer = tplayer;
  }
}

