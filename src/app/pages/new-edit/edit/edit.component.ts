import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateEditCategoryComponent } from '../shared/create-edit.component';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent extends CreateEditCategoryComponent
  implements OnInit {
  constructor(injector: Injector, private activatedRoute: ActivatedRoute) {
    super(injector.get(CategoryService), injector.get(ToastrService));
  }

  ngOnInit() {
    super.ngOnInit();
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.loadCategories(params.id);
        this.categoryService.read(params.id).subscribe((category) => {
          this.form.patchValue(category);
        });
      }
    });
  }

  save() {
    this.loading = true;
    this.categoryService.update(this.form.value).subscribe(
      (res) => {
        this.loading = false;
        this.toastr.success('Registro foi gravado.', 'Sucesso!');
      },
      (err) => this.toastr.error('Ocorreu um erro.', 'Ops!')
    );
  }
}
