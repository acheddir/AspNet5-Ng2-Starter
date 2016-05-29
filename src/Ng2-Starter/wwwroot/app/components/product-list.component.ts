import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { StarsComponent } from './stars.component';

@Component({
    templateUrl: 'app/templates/product-list.component.html',
    styleUrls: ['app/styles/product-list.component.css'],
    pipes: [ProductFilterPipe],
	directives: [StarsComponent, ROUTER_DIRECTIVES]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    products: IProduct[];

    constructor(private _productService: ProductService) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        alert(message);
    }
}