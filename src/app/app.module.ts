import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortDirective } from './directive/sort.directive';
import { HelloComponent } from './hello.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, SortDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
