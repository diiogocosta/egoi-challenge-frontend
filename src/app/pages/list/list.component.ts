import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/models/category';
import { SlideTreeComponent } from 'src/app/components/slide-tree/slide-tree.component';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild(SlideTreeComponent)
  slideTree: SlideTreeComponent;
  public categoryList: Category[];
  public loading = false;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.categoryService.readAll().subscribe((categories) => {
      this.loading = false;
      this.categoryList = categories;
    });
  }

  delete(id) {
    this.loading = true;
    this.categoryService.delete(id).subscribe(
      (res) => {
        this.loading = false;

        this.slideTree.refreshOnDelete();
        this.toastr.success('Registro removido.', 'Sucesso!');
      },
      (err) => this.toastr.error('Ocorreu um erro ao remover.', 'Ops!')
    );
  }

  // If necessary can be used to delete when not using async requests.
  // deleteStrategy(list: Category[], id) {
  //   return list
  //     .map((item) => {
  //       if (item.categories) {
  //         item.categories = this.deleteStrategy(item.categories, id);
  //       }
  //       return item;
  //     })
  //     .filter((itemFilter) => itemFilter.id !== id);
  // }

  edit(id) {
    this.router.navigate([`edit/${id}`]);
  }

  doSearch(event, value) {
    if (event.key === 'Enter') {
      this.loading = true;
      this.categoryService
        .readAll(false, null, value)
        .subscribe((categories) => {
          this.loading = false;
          this.categoryList = categories;
        });
    }
  }
}
