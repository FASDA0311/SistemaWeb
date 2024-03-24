import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicModule } from './components/public/public.module';
import { PrivateModule } from './components/private/private.module';
import { PublicRoutingModule } from './components/public/public-routing.module';
import { PrivateRoutingModule } from './components/private/private-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,PublicModule, PrivateModule , PublicRoutingModule , PrivateRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SIWeb';
}
