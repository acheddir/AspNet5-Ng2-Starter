System.register(['@angular/core', '@angular/http', 'rxjs/Rx', '@angular/router', '../services/product.service', './welcome.component', './product-list.component', './product-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, product_service_1, welcome_component_1, product_list_component_1, product_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(_router) {
                    this._router = _router;
                    this.pageTitle = 'Acme Product Management';
                }
                ngOnInit() {
                    this._router.navigate(['/']);
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'pm-app',
                    templateUrl: 'app/templates/app.component.html',
                    styleUrls: ['app/styles/app.component.css'],
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [product_service_1.ProductService,
                        http_1.HTTP_PROVIDERS,
                        router_1.ROUTER_PROVIDERS]
                }),
                router_1.Routes([
                    { path: '/', component: welcome_component_1.WelcomeComponent },
                    { path: '/welcome', component: welcome_component_1.WelcomeComponent },
                    { path: '/products', component: product_list_component_1.ProductListComponent },
                    { path: '/product/:id', component: product_detail_component_1.ProductDetailComponent }
                ]), 
                __metadata('design:paramtypes', [router_1.Router])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map