import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { MatDialogModule, MatCard } from '@angular/material';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule,MatGridListModule,MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrixComponent } from './matrix/matrix.component';
import { MatNativeDateModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatrixTileComponent } from './matrix-tile/matrix-tile.component';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http'; 
import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [
    //AppComponent,
    MatrixComponent,
    MatrixTileComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DragDropModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
   
  ],
  //bootstrap: [MatrixComponent],
  entryComponents: [
    //AppComponent,
    MatrixComponent
  ],
})
export class AppModule {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const el = createCustomElement(MatrixComponent, 
                                 { injector: this.injector });
    customElements.define('app-matrix', el);

  }

}