import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form-add-character',
  templateUrl: './form-add-character.component.html',
  styleUrls: ['./form-add-character.component.css']
})
export class FormAddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter ()

  public character: Character = {
    name: '',
    power: 0,
    id: ''
  }

  emitCharacater ():void {
    if(this.character.name.length === 0) return

    this.onNewCharacter.emit(this.character)

    this.resetForm()

  }

  resetForm (): void {
    this.character = {name: '', power: 0, id: ''}
  }

  
}
