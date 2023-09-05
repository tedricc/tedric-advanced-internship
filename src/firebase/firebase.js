import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcboQFWC77VkPAZzcyDApJhwtnYrLKLAU",
  authDomain: "tedric-advanced-internship.firebaseapp.com",
  projectId: "tedric-advanced-internship",
  storageBucket: "tedric-advanced-internship.appspot.com",
  messagingSenderId: "588751824281",
  appId: "1:588751824281:web:996bc2510d895eccab5f08",
};

function firebase() {
  initializeApp(firebaseConfig);
}

const app = firebase();

export default app;
