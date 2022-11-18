# Led Banner Twitch Tool

## Run local app

<code> npm run build </code>

## How to host app in Firebase

1. Log in on https://console.firebase.google.com/ and select _Create new proyect_.
2. Follow the wizard to create a new project.
3. Select the project and then, select _Add new app_ of web type. Follow the wizard. The firebase dependencies are already included in the project so, you don't have to install them. Only copy de content of firebaseConfig object into a into _config/firebaseConfig.js_ file.
4. Activar la autenticación a través de Firebase (ej: email/pass).
5. Create a firebase database to store the user data.
