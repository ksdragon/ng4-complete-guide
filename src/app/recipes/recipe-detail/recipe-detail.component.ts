import { Recipe } from './../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeDetail : Recipe;
  recipeDetail: Recipe;
  id: number;
  constructor(private serviceRecipe: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
   }

   addIngredientsToSL(){
      this.serviceRecipe.addIngredientsToSL(this.recipeDetail.ingredients);
      // console.log(this.recipeDetail.ingredients);
   }


  ngOnInit() {
    // const id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params[('id')];
        this.recipeDetail =  this.serviceRecipe.getRecipe(this.id);
      }
    );
  }

  onEdit(id: number){
    // this.router.navigate(['/recipes', id, 'edit']);
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(index: number){
    this.serviceRecipe.deleteRecipe(index);
    this.router.navigate(['/recipes']);
  }

}
