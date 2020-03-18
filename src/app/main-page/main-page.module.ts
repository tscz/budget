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
import { AgGridModule } from "ag-grid-angular";

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    AgGridModule
  ]
})
export class MainPageModule {}
