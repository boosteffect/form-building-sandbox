import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-dynamic',
  templateUrl: './formly-dynamic.component.html',
  styleUrls: ['./formly-dynamic.component.css']
})
export class FormlyDynamicComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  formConfigJson = "";

  form = new FormGroup({});
  model = { };
  fields: FormlyFieldConfig[] = [];

  onSubmit() {
    alert(
      JSON.stringify(this.model, null, 4)
    );
  }

  refreshForm() {
    this.fields = JSON.parse(this.formConfigJson);

    // form changed so reset the model
    this.model = { };
  }

}
