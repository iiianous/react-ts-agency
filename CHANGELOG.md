# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.1](https://github.com/iiianous/react-ts-agency/compare/v0.1.0...v0.1.1) (2024-01-20)

### Features

- implement responsive section wrappers ([9dd3840](https://github.com/iiianous/react-ts-agency/commit/9dd38408f4637b2044bef5232220c6ad34700d9f))

## 0.1.0 (2024-01-20)

### ⚠ BREAKING CHANGES

- setup project

### Features

- setup project ([4fa4c84](https://github.com/iiianous/react-ts-agency/commit/4fa4c840a2e00be3456c718122117ad3541c2c12))

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBmoXjnESs7CCJ_jICGSnfPy6QjqFmIeSI",
authDomain: "agency-d0a42.firebaseapp.com",
projectId: "agency-d0a42",
storageBucket: "agency-d0a42.firebasestorage.app",
messagingSenderId: "167314589918",
appId: "1:167314589918:web:1be08fbb1d11f046531a4f",
measurementId: "G-64HPCMEQEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

## Use Script tag

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBmoXjnESs7CCJ_jICGSnfPy6QjqFmIeSI",
    authDomain: "agency-d0a42.firebaseapp.com",
    projectId: "agency-d0a42",
    storageBucket: "agency-d0a42.firebasestorage.app",
    messagingSenderId: "167314589918",
    appId: "1:167314589918:web:1be08fbb1d11f046531a4f",
    measurementId: "G-64HPCMEQEC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
