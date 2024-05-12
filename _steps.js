/*
visit console.firebase.google.com
create a new fire base project
visit doc
click on build> authentication
after that click on >web then click on >get started
first time firebase uses install firebase sdk
register app
install firebase
npm install firebase> npm start
create a folder under src>create a file> firebase.init.js>copy information> export default app;
npm install -g firebase-tools> then

create auth using getAuth from firebase by using app from firebase.init.js
create a google auth provider
go to firebase>build>authentication>SignIn method
enable signIn method
import { getAuth } from "firebase/auth";
import app from './firebase/firebase.init';

const auth =getAuth(app);

create auth provider
const provider = new GoogleAuthProvider();
create a button in google signIn method with a event handler


*/