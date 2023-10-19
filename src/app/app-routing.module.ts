import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'form', component: DataEntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
