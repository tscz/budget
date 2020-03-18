import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbMenuModule
} from "@nebular/theme";
import { MainPageModule } from "./main-page/main-page.module";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { AgGridModule } from "ag-grid-angular";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [AppComponent, MainMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: "default" }),
    MainPageModule,
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    AgGridModule.withComponents([]),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
