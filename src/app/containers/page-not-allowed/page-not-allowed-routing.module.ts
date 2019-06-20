import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotAllowedComponent as PageNotAllowedContainer } from "./page-not-allowed.component";

const routes: Routes = [
	{
		path: "",
		component: PageNotAllowedContainer
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PageNotAllowedRoutingModule {}
