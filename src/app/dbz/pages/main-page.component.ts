import { Component, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.html'
})

export class MainPageDbz {
   
    constructor(private dbzService: DbzService) {
        
    }

    get characters (): Character[] {
        return [...this.dbzService.characters]
    }

    onDeleteCharacter(id: string):void {
        this.dbzService.onDeleteCharacter(id)
    }

    onNewCharacter(character: Character) {
        this.dbzService.onNewCharacter(character)
    }

    

}