import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { LibreriaListaComponent } from './components/libreria/libreria-lista/libreria-lista.component';
import { LibroComponent } from './components/libreria/libro/libro.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

// Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { environment } from 'src/environments/environment';

import { LibreriaService } from './servicio/libreria.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    LibreriaListaComponent,
    LibroComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    RegistroComponent,
    LibreriaListaComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [ 
    LibreriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
