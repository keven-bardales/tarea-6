import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuidv4} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: Character[] = [{
        name: 'Krillin',
        power: 1000,
        id: uuidv4()
    }, 
    {
        name: 'Goku',
        power: 9500,
        id: uuidv4()
    },
    {
        name: 'Vegeta',
        power: 9000,
        id: uuidv4()
    }    
]

onNewCharacter(character: Character):void{
    if(!character) return
    const newCharacter: Character = {
        ...character,id: uuidv4()
    }
    this.characters.push(newCharacter)
}

onDeleteCharacter(id: string):void{
  this.characters =  this.characters.filter((character)=> {
        if(character.id !== id) {
            return character
        }
        return
    }  )
}
    
}