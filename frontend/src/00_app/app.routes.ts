import { Routes } from '@angular/router';
import { HomeComponent } from '../02_game/home/home.component';
import { SettingsComponent } from '../02_game/settings/settings.component';
import { RulesComponent } from '../02_game/rules/rules.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "settings", component: SettingsComponent },
    { path: "rules", component: RulesComponent },
    { path: "**", redirectTo: "" },
];
