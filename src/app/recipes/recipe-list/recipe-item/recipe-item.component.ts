import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  // wysyłamy zdarzenie do rodzica wyżej.
  // @Output() selectedItem = new EventEmitter<void>();
  constructor(private recpieService: RecipeService,
            private route: ActivatedRoute) { }

  // click w szablonie
  //  onSelectItem(){
  //   //wysyłam dane za pomoca servisu do recipe-component
  //   this.recpieService.recipeSelected.emit(this.recipe);
  //   // this.selectedItem.emit();
  // }

  ngOnInit() {
  //   this.route.params.subscribe(
  //     (params: Params) => {
  //       this.recipe = this.recpieService.getRecipes()[(params[('id')])];
  //       console.log(this.recipe);
  //     }
  //   );
  }

}
