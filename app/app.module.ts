import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { AdminFunctions } from './admin/components/app.admin-functions.component'
import { BulkOperations } from './admin/components/app.bulk-operations.component'
import { AdminDashboard } from './shared/components/app.dashboard.component'



@NgModule({
    imports:[
        BrowserModule, 
        RouterModule.forRoot ([{path: '', redirectTo: '/dashboard', pathMatch: 'full' },{path:'dashboard', component: AdminDashboard},{path:'bulkoperations',component: BulkOperations},{path:'adminfunctions',component: AdminFunctions}])
        ] 
    ,declarations :[AppComponent, BulkOperations, AdminFunctions, AdminDashboard]
    ,providers: []
    ,bootstrap :[AppComponent]
})
export class AppModule {

}