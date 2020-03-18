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
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    AgGridModule,
    ChartsModule
  ]
})
export class MainPageModule {}
