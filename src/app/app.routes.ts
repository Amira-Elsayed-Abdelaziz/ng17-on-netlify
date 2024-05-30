import { Routes } from '@angular/router';
import { AllProComponent } from './all-pro/all-pro.component';
import { CardComponent } from './card/card.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { SingleProComponent } from './single-pro/single-pro.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
    {
        path: "",
        component: AllProComponent,
        title:"All Products",
    },
    {
        path: "all-pro",
        component: AllProComponent,
        title:"All Products",
    },
    {
        path: "card",
        component: CardComponent,
        title:"Card",
    },
    {
        path: "cart",
        component: CartComponent,
        title:"Cart",
    
    },
    {
        path: "header",
        component: HeaderComponent,
        title:"Header",
    },
    {
        path: "login",
        component: LoginComponent,
        title:"Login",
    },
    {
        path: "regist",
        component: RegistComponent,
        title:"Register",
    },
    {
        path: "single-pro/:id",
        component: SingleProComponent,
        title:"Single Product",
    },
    {
        path: "**",
        component: NotFoundComponent,
        title:"Not Found",
    },
];
