import { PopupEditarPeliComponent } from "./popup-editar-peli/popup-editar-peli.component";
import { PopupNuevaPeliComponent } from "./popup-nueva-peli/popup-nueva-peli.component";
import { PopupInfoPeliComponent } from "./popup-info-peli/popup-info-peli.component";
import { PopupNewFavComponent } from "./popup-new-fav/popup-new-fav.component";
import { HttpClientModule } from "@angular/common/http";

import { GenComponent } from "./gen/gen.component";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import {
  MatDialogModule,
  MatSelectModule,
  MatSlideToggleModule
} from "@angular/material";
import { AdminComponent } from "./admin/admin.component";
import { MovieComponent } from "./movie/movie.component";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatIconModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule
} from "@angular/material";

import { NavComponent } from "./nav/nav.component";
import { SearchComponent } from "./search/search.component";
import { FavSectionComponent } from "./fav-section/fav-section.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { LoginComponent } from "./authentication/login/login.component";
import { SignupComponent } from "./authentication/signup/signup.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PeliculasComponent } from "./peliculas/peliculas.component";
import { ProfileComponent } from "./profile/profile.component";
import { ReleasesComponent } from "./releases/releases.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NavGendersComponent } from "./nav-genders/nav-genders.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PopupEditUserComponent } from "./popup-edit-user/popup-edit-user.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { AutoGuardService } from "./services/autoGuard/auto-guard.service";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "fav-section",
    component: FavSectionComponent,
    canActivate: [AutoGuardService]
  },
  {
    path: "reproductor",
    component: MovieComponent,
    canActivate: [AutoGuardService]
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AutoGuardService]
  },
  {
    path: "peliculas",
    component: SearchComponent,
    canActivate: [AutoGuardService]
  },
  {
    path: "welcome",
    component: AuthenticationComponent
  },
  {
    path: "ver-peliculas",
    component: PeliculasComponent,
    canActivate: [AutoGuardService]
  },
  {
    path: "perfil",
    component: ProfileComponent,
    canActivate: [AutoGuardService]
  },
  {
    path: "releases",
    component: ReleasesComponent,
    canActivate: [AutoGuardService]
  },
  {
    path: "search",
    component: SearchComponent,
    canActivate: [AutoGuardService]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    MovieComponent,
    NavComponent,
    SearchComponent,
    FavSectionComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    PeliculasComponent,
    ProfileComponent,
    GenComponent,
    ReleasesComponent,
    PopupInfoPeliComponent,
    PopupNuevaPeliComponent,
    PopupEditarPeliComponent,
    PopupNewFavComponent,
    NavGendersComponent,
    PopupEditUserComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatMenuModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupNuevaPeliComponent,
    PopupInfoPeliComponent,
    PopupEditarPeliComponent,
    PopupNewFavComponent,
    PopupEditUserComponent
  ]
})
export class AppModule {}
