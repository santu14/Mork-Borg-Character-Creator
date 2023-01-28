import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-class-selection',
  templateUrl: './character-class-selection.component.html',
  styleUrls: ['./character-class-selection.component.css'],
})
export class CharacterClassSelectionComponent {
  classes: Array<any> = [
    { name: 'Scum (no class)' },
    { name: 'Fanged Deserter' },
    { name: 'Gutter Born Scum' },
    { name: 'Gutter Born Scum' },
    { name: 'Gutter Born Scum' },
    { name: 'Gutter Born Scum' },
    { name: 'Gutter Born Scum' },
    { name: 'Gutter Born Scum' },
  ];
}
