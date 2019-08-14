import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { environment } from "../../../environments/environment";
import { AngularFirestore } from "@angular/fire/firestore";
import { IProfile } from "../../models/project.interface";
import { map } from "rxjs/operators";
import { IUser } from "src/app/models/user.interface";

@Injectable()
export class ProfileService {
	loadProfile(profileName: string): Observable<any> {
		if (!profileName) {
			return of()
		}
		return this.firestore
			.collection(`/profiles/`)
			.doc(profileName)
			.collection(`/projects/`, ref => ref.where("profile", "==", profileName))
			.valueChanges();
  }
	getUserProfile(userId: string): Observable<any> {
		if (!userId) {
			return of()
		}
		return this.firestore
			.collection(`/users/`)
			.doc(userId)
			.valueChanges();
	}
	constructor(private _http: HttpClient, private firestore: AngularFirestore) {}
}
