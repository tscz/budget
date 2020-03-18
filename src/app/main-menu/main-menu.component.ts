import { Component } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"]
})
export class MainMenuComponent {
  items: NbMenuItem[] = [
    {
      title: "Home",
      icon: "home-outline"
    },
    {
      title: "Income",
      icon: "plus-outline"
    },
    {
      title: "Spending",
      icon: "minus-outline"
    },
    {
      title: "Budgets",
      icon: "map-outline"
    },
    {
      title: "Statistics",
      icon: "pie-chart-outline"
    },
    {
      title: "Config",
      icon: "settings-outline"
    }
  ];
}
