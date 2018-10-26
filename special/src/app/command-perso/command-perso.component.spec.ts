import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPersoComponent } from './command-perso.component';

describe('CommandPersoComponent', () => {
  let component: CommandPersoComponent;
  let fixture: ComponentFixture<CommandPersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandPersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
