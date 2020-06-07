import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PlayerDetailComponent } from './player-detail.component';
import { By } from '@angular/platform-browser';

describe('#PlayerComponent', () => {
  let fixture: ComponentFixture<PlayerDetailComponent>;
  let component: PlayerDetailComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerDetailComponent],
  });

    fixture = TestBed.createComponent(PlayerDetailComponent);
    component = fixture.componentInstance;
  });

  it('should show product details for a particular player', () => {
    component.player = {
      id: 1,
      name: 'Roger Federer',
    };

    fixture.detectChanges();

    const idPlayer: HTMLElement = fixture.debugElement.query(By.css('.playerid')).nativeElement;
    const namePlayer: HTMLElement = fixture.debugElement.query(By.css('#playername')).nativeElement;

    expect(idPlayer.innerText).toEqual('id: 1');
    expect(namePlayer.innerText).toEqual('Roger Federer Details');
  });

  it('THIS TEST SHOULD FAIL!!!', () => {
    component.player = {
      id: 2,
      name: 'Rafael Nadal',
    };

    fixture.detectChanges();

    const idPlayer: HTMLElement = fixture.debugElement.query(By.css('.playerid')).nativeElement;
    const namePlayer: HTMLElement = fixture.debugElement.query(By.css('#playername')).nativeElement;

    expect(idPlayer.innerText).toContain('WRONG ID');
    expect(namePlayer.innerText).toContain('SOMETHING');
  });

});
