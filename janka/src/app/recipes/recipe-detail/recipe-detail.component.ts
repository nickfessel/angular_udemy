import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  //@Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id']; // cast string id to a number by using "+" in front of it.
        this.recipe = this.recipeService.getRecipe(this.id);
      }
      );

  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(["../", this.id, 'edit'], {relativeTo: this.route});
  }
}
