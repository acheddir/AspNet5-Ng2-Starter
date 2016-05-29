import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { Router, Routes, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';

import { ProductService } from '../services/product.service';
import { WelcomeComponent } from './welcome.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: [ 'app/styles/app.component.css' ],
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS]
})

@Routes([
    { path: '/', component: WelcomeComponent },
    { path: '/welcome', component: WelcomeComponent },
    { path: '/products', component: ProductListComponent },
    { path: '/product/:id', component: ProductDetailComponent }
])

export class AppComponent implements OnInit {
    pageTitle: string = 'Acme Product Management';

    constructor(private _router: Router) { }

    ngOnInit() {
        this._router.navigate(['/']);
    }
}