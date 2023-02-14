import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// personal pages
import { HomepageComponent } from './homepage/homepage.component';
import  {LoginComponent}  from './loginpage/loginpage.component';
import  {SignUpComponent}  from './signuppage/signuppage.component';
// config for firestore
import {  Firestore as AngularFirestore  } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// the firebase config from my conviedential project
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe6X3On4EcV5OVjrysYSk5m2wx27WycHs",
  authDomain: "conviedentiel.firebaseapp.com",
  projectId: "conviedentiel",
  storageBucket: "conviedentiel.appspot.com",
  messagingSenderId: "618850576330",
  appId: "1:618850576330:web:c049c160cdbc81d2e51133"
};


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
