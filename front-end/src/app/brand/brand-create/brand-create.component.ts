import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from 'src/app/services/brand';
import { BrandServiceService } from 'src/app/services/brand-service.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent implements OnInit {

  public form: FormGroup;
  public showErrors: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private brandService: BrandServiceService,
    private location: Location) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  public get formControls() {
    return this.form.controls;
  }

  onSubmit() {

    if (!this.form.valid) {
      this.showErrors = true;
      return;
    }

    const { name } = this.form.value;

    const brand = <Brand> {
      name
    };

    this.brandService.create(brand).subscribe(x=> {
      this.location.back();
    },(error)=> console.log(error));

  }

}
