# Panda Gun Shop 

## Overview

This a shop to sell water weapons  
* User can Sign In, Sign Up to the personal account  
* List of Products is available on the Home page  
* Customer can select multiple guns and add them to  the Cart  
* By clicking on the Cart - user can proceed to the Shopping Cart - where it is possible to manage amount of each product or completely remove it from the basket   
* Proceed to Checkout button will redirect customer to the Payment page to enter Deliver Information and Card details  
* Unauthenticated user will be redirected to the login page before payment is available  
* Once order is paid - customer is redirected to the Orders page
* Authenticated users can observe history of purchases on the Orders page  

## Architecture Specification  

For this project implementation it was decided that the server was developed with **Express.js, Firebase functions, firestore, authentification**   
and the web client with **React.js** library, that is used for building user interfaces.  
The database uses Firebase **Firestore** as storage.  
**React Context API** is used for state management.  
Application is **deployed on Firebase** functions and hosting.
 
## Installation and Set Up  

1. Create [Firebase](https://console.firebase.google.com/u/0/) account. Navigate to Firebase console and create Project there. Check "Also set up Firebase Hosting" checkbox.
2. ```npm i -g firebase-tools```  
```firebase login```   
```firebase init```
3. In Project Settings select **Config** and copy JSON Config.
4. Replace firebaseConfig in config/firebase.js file with your config.
5. Turn on ```Password and email Sign-in method``` in Authentication in Firebase project.
6. Create a database in Cloud Firestore in Firebase project.
7. Create [Stripe](https://stripe.com/en-se) account and copy Public and Secret keys. 
8. Add Public Stripe key as ```REACT_APP_PUBLIC_KEY_STRIPE='your_key'``` in .env.development.local file in root folder.
9. Add Secret Stripe key as ```STRIPE_SK='your_key'``` in .env in functions root directory.

10. ```cd functions``` to navigate to 


1. **Home page**  
![home](https://res.cloudinary.com/dnkftif1n/image/upload/v1608322707/gun%20shop%20md/2020-12-18_20-38-35_qoewkv.png)  


2. **Login page**  
![home](https://res.cloudinary.com/dnkftif1n/image/upload/v1608322707/gun%20shop%20md/2020-12-18_20-45-01_cxx1eq.png)

3. **Shopping Cart page**  
![home](https://res.cloudinary.com/dnkftif1n/image/upload/v1608322707/gun%20shop%20md/2020-12-18_20-41-42_iose95.png)  

4. **Deliver Information and Card details page**  
![home](https://res.cloudinary.com/dnkftif1n/image/upload/v1608322707/gun%20shop%20md/2020-12-18_20-44-09_kqdymt.png)  

5. **Orders page**  
![home](https://res.cloudinary.com/dnkftif1n/image/upload/v1608322707/gun%20shop%20md/2020-12-18_20-44-30_cwxjf3.png)  

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
 
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

