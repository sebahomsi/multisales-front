import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/services/brand';
import { BrandService } from 'src/app/services/brand/brand.service';


@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[]; 

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {

    this.brandService.getAll(1, 10).subscribe((brands) => {
      this.brands = brands
    });

  }

}
