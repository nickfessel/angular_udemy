import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {

    }

    private recipes:Recipe[] = [
        new Recipe("A Test Recipe",
        "This is simply a test.",
        "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
        [new Ingredient("Apples", 2)]
        ),
        new Recipe("A Test Recipe 2",
        "This is simply a test 2.",
        "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
        [new Ingredient("Pears", 3)]
        )
      ];

      getRecipes() {
          return this.recipes.slice(); // return a new array which is an exact copy of the private variable recipes here.
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}