import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassSelectionComponent } from './character-class-selection.component';

describe('CharacterClassSelectionComponent', () => {
  let component: CharacterClassSelectionComponent;
  let fixture: ComponentFixture<CharacterClassSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterClassSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterClassSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
