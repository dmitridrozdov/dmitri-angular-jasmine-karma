import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { TennisPlayer } from './tennisPlayers';
import { PlayersService } from './search.service';

describe('#PlayersService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let playersService: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PlayersService
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    playersService = TestBed.inject(PlayersService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#getAllTennisPlayers', () => {
    let expectedPls: TennisPlayer[];

    beforeEach(() => {
      expectedPls = [
        { id: 1, name: 'Rodger Federer' },
        { id: 2, name: 'Rafael Nadal' },
      ] as TennisPlayer[];
    });

    it('should return expected players by calling once', () => {
      playersService.getAllTennisPlayers().subscribe(
        players => expect(players).toEqual(expectedPls, 'should return expected players'),
        fail
      );

      const req = httpTestingController.expectOne(playersService.playersUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedPls);
    });

    it('should be OK returning no players', () => {
      playersService.getAllTennisPlayers().subscribe(
        players => expect(players.length).toEqual(0, 'should have empty player array'),
        fail
      );

      const req = httpTestingController.expectOne(playersService.playersUrl);
      req.flush([]);
    });

    //Test case 3
    it('should turn 404 error into an empty player result', () => {
      playersService.getAllTennisPlayers().subscribe(
        players => expect(players.length).toEqual(0, 'should return empty player array'),
        fail
      );

      const req = httpTestingController.expectOne(playersService.playersUrl);

      const msg = '404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' });
    });

    //Test case 4
    it('should return expected players when called multiple times', () => {
      playersService.getAllTennisPlayers().subscribe();
      playersService.getAllTennisPlayers().subscribe(
        players => expect(players).toEqual(expectedPls, 'should return expected players'),
        fail
      );

      const requests = httpTestingController.match(playersService.playersUrl);
      expect(requests.length).toEqual(2, 'calls to getAllTennisPlayers()');

      requests[0].flush([]);
      requests[1].flush(expectedPls);
    });
  });
});
