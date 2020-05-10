import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { ToastrService } from 'ngx-toastr';

@Component({})
export class CreateEditCategoryComponent implements OnInit {
  public form: FormGroup;
  public categoryList: Category[];
  public loading = false;

  constructor(
    protected categoryService: CategoryService,
    protected toastr: ToastrService
  ) {}

  ngOnInit() {
    this.form = new FormBuilder().group({
      id: [],
      name: ['', Validators.required],
      categoryId: [],
    });
  }

  loadCategories(id = null) {
    this.loading = true;

    this.categoryService.readAll(true, id).subscribe((categories) => {
      this.categoryList = categories;
      this.loading = false;
    });
  }
}
