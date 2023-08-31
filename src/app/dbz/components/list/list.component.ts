import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input('characterListPersonalized')
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10,
    id: uuid()
  }]

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter ()

  deleteCharacter(id: string ):void{
    if(!id) return
    this.onDeleteCharacter.emit(id)
  }


}
