import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import {
	GetUser,
	GoogleLogin,
	Logout
} from "./../../store/actions/auth.actions";
import { IUser } from "../../models/user.interface";
import { IAppState } from "../../store/state/app.state";

import { selectCurrentUser } from "../../store/selectors/auth.selectors";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
	user$ = this._store.pipe(select(selectCurrentUser));

	constructor(private _store: Store<IAppState>, private _route: Router) {}

	ngOnInit() {
		this._store.dispatch(new GetUser());
	}

	googleLogin() {
		this._store.dispatch(new GoogleLogin());
	}

	logout() {
		this._store.dispatch(new Logout());
	}
}
