import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/services/brand';
import { BrandServiceService } from 'src/app/services/brand-service.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[]; 

  constructor(private brandService: BrandServiceService) { }

  ngOnInit(): void {

    this.brandService.getAll(1, 10).subscribe((brands) => {
      this.brands = brands
    });

  }

}
