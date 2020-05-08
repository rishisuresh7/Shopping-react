# Shopping React

Add the API-Key for firebase to use `Google Auth`. <br />
In the file `src/firebase/firebase.util.js`, place your configurations <br />
>const config = { <br />
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;apiKey: "", <br />
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;authDomain: "", <br />
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;databaseURL: "", <br />
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;projectId: "", <br />
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;storageBucket: "", <br />
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;messagingSenderId: "", <br />
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;appId: "" <br />
>}

<br />
And to use `Strip Checkout`, you can add your publishable API-Key to the file -> <br />
  `src/components/stripe-button/stripe-button.component.jsx` <br />

> const publishKey = "your key";

<br />

>1. ##### yarn install <br />
To install the required node modules

>2. ##### yarn start <br />
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

>3. ##### yarn build <br />
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
