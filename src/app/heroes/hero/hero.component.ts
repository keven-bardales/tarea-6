import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman'
  public age: number = 45
  public showChangeNameButton: boolean = true
  public showChangeAgeButton: boolean = true

  get capitalizedName ():string {
    return this.name.toUpperCase()
  }

  changeShowName () {
    this.showChangeNameButton = !this.showChangeNameButton
  }

  changeShowAge(){
    this.showChangeAgeButton = !this.showChangeAgeButton
  }

  resetChangeButtons(){
    this.showChangeAgeButton = !this.showChangeAgeButton
    this.showChangeNameButton = !this.showChangeNameButton
  }


  getHeroDescription(): string {
    return `${this.name} is a hero that has ${this.age} years`
  }

  changeHero():void {
    // //TODO:
    // throw new Error ('metodo aun no implementado')
    this.name = 'The Hulk'
    this.changeShowName()
  }

  changeAge():void {
      this.age = 25
      this.changeShowAge()
  }

  reset():void {
    this.name = 'Ironman'
    this.age = 45
    this.resetChangeButtons()
  }
  
}
