import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faBars = faBars;
  handleSearch(value: string){
    console.log(value)
  }
}

