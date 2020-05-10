import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { CreateEditCategoryComponent } from '../shared/create-edit.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent extends CreateEditCategoryComponent
  implements OnInit {
  public form: FormGroup;
  public categoryList: Category[];

  constructor(injector: Injector) {
    super(injector.get(CategoryService), injector.get(ToastrService));
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadCategories();
  }

  save() {
    this.loading = true;
    this.categoryService.create(this.form.value).subscribe(
      (res) => {
        this.loadCategories();
        this.toastr.success('Registro foi gravado.', 'Sucesso!');
        this.form.reset();
      },
      (err) => this.toastr.error('Ocorreu um erro.', 'Ops!')
    );
  }
}
