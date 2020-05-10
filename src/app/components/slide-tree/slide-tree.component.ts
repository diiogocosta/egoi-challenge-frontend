import {
  Component,
  Input,
  Renderer2,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-slide-tree',
  styleUrls: ['./slide-tree.component.scss'],
  templateUrl: './slide-tree.component.html',
})
export class SlideTreeComponent {
  @Input() category: Category[] = [];
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  public treePage: {
    categories: Category[];
    active: Category;
  }[] = [];

  private deleteReference: {
    pageIndex: number;
    categoryIndex: number;
  };

  constructor(private renderer: Renderer2) {}

  public deleteNode(category: Category, pageIndex, categoryIndex) {
    this.deleteReference = {
      pageIndex,
      categoryIndex,
    };
    this.delete.emit(category.id);
  }

  public buildTree() {
    this.treePage = [];
    this.treePage.push({ categories: this.category, active: null });
  }

  public selectNode(pageIndex, category: Category, categories: Category[]) {
    this.treePage[pageIndex].active = category;
    this.treePage.splice(pageIndex + 1, this.treePage.length);
    if (categories) {
      this.treePage.push({
        categories,
        active: null,
      });
    }
  }

  public refreshOnDelete() {
    this.treePage.splice(
      this.deleteReference.pageIndex + 1,
      this.treePage.length
    );
    this.treePage[this.deleteReference.pageIndex].categories.splice(
      this.deleteReference.categoryIndex,
      1
    );
  }

  public popupActions(event) {
    event.stopPropagation();
  }
}
