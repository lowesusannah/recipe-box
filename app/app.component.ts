import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Recipe Box</h1>
  <ul>
    <li *ngFor="let currentRecipe of names"><a href (click)="recipeDetails(currentRecipe)">{{currentRecipe.names}}</a>
      <!-- <div *ngIf="detailsShowing">
        <p>{{}}</p>
      </div> -->
    </li>
  </ul>
  </div>
  `
})

export class AppComponent {
  names: Recipe[]= [
    new Recipe('Spaghetti', 'Boil water and add pasta'),
    new Recipe('Scrambled Eggs', 'Beat eggs and add to pan'),
    new Recipe('Cheese Pizza', 'Add sauce and cheese to crust and bake')
  ];

  // details: Detail[]= [
  //   new Recipe('Boil water and add pasta'),
  //   new Recipe('Beat eggs and add to pan'),
  //   new Recipe('Add sauce and cheese to crust and bake')
  // ];

  detailsShowing: boolean=false;
  recipeDetails(){
    this.detailsShowing = !this.detailsShowing;
    this.
    alert("working");
  }
}

export class Recipe {
  constructor(public names: string, public details: string){ }
}

// export class Detail {
//   constructor(public details: string) {}
// }
