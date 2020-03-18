import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbIconModule,
  NbCardModule,
  NbMenuModule
} from "@nebular/theme";
import { MainPageComponent } from "./main-page.component";
import { MainMenuComponent } from "../main-menu/main-menu.component";

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule
  ]
})
export class MainPageModule {}
