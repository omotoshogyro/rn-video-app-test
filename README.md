React Native Test Video App
A React Native app built with Expo to display and play a list of videos fetched from Firebase Firestore. The app uses Expo AV for video playback and Firebase for data storage.

Features
Fetch video and other movie catergories data from Firebase Firestore.

Display a list of videos in a scrollable view.

Play videos using Expo AV.

Pause and unload videos that are not in focus.

Smooth scrolling with FlatList and pagingEnabled.

Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v16 or higher)

Expo CLI (v6 or higher)



Create a new project.

Add a Firestore Database to your project.

Add your Firebase configuration to the app:

Create a firebaseConfig.js file in the root of your project.

Add your Firebase project credentials:

export default firebaseConfig;
Update the Firestore collection and document structure to match the app's requirements.

4. Run the App
Start the development server:

bash
Copy
npx expo start
Scan the QR code with the Expo Go app (available on iOS and Android).

Alternatively, run the app on an emulator or physical device.

Major Project Structure
Copy
video-app/
├── assets/               # Static assets (images, fonts, etc.)
├── components/           # Reusable components
├── hooks/                # Custom hooks (e.g., useVideoPlayer)
├── screens/              # App screens
├── firebaseConfig.js     # Firebase configuration
├── App.tsx               # Main app component
└── package.json          # Project dependencies
Dependencies
Expo - Framework for building React Native apps.

Expo AV - Video playback.

Firebase - Backend for data storage.

React Navigation Spefically React native bottom tabs- Navigation between screens (if applicable).

Scripts
npm start or yarn start - Start the development server.

npm run android or yarn android - Run the app on an Android device/emulator.

npm run ios or yarn ios - Run the app on an iOS simulator.

npm run web or yarn web - Run the app in a web browser.




Contact
If you have any questions or feedback, feel free to reach out:

GitHub - omotoshogyro

