import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { FooterComponent } from './footer/footer.component';

import { NewsServiceService } from './services/news-service.service';
import { NewDetailsComponent } from './new-details/new-details.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NavbarComponent,
    HeaderComponent,
    NewsItemComponent,
    FooterComponent,
    NewDetailsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
