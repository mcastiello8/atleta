import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtletaListComponent } from './features/atleta/atleta-list/atleta-list.component';
import { AtletaDetailComponent } from './features/atleta/atleta-detail/atleta-detail.component';
import { AtletaInsertComponent } from './features/atleta/atleta-insert/atleta-insert.component';

const routes: Routes = [

  { path: 'atleta/list', component: AtletaListComponent },
  { path: 'atleta/detail/:id', component: AtletaDetailComponent },
  { path: 'atleta/insert', component: AtletaInsertComponent },
  { path: '', redirectTo: 'atleta/list', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
