import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AllProComponent } from './all-pro/all-pro.component';
// import { CardComponent } from './card/card.component'; 
// import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
// import { LoginComponent } from './login/login.component';
// import { RegistComponent } from './regist/regist.component';
// import { SingleProComponent } from './single-pro/single-pro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent
  
  ],
    // ,
    // AllProComponent,
    // CardComponent,
    // CartComponent ,
    // HeaderComponent,
    // LoginComponent,
    // RegistComponent,
    // SingleProComponent
  //  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
