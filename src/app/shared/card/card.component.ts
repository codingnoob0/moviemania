import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'app-moviecard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() type: string;
  constructor() { }

  ngOnInit(): void {
  }
}
