# courier_app
The courier mobile app, based on React Native.

## Instalasi
1. Pastikan sudah install [React-Native](https://reactnative.dev/docs/environment-setup) ``Gunakan React Native CLI Quickstart``
2. Pull project 
3. Install dengan menggunakan [yarn] atau [nmp]

### Menjalankan Applikasi
1. Dapat menggunakan ``react-native start`` atau [yarn]/[npm] `start`
2. menjalankan di android dapat menngunakan : 
    - pastiakn android studio ter install
    - pastikan emulator android sudah jalan
    - untuk pengecekan perangkat yang terhubung dapat di lakukan `adb devices`
    - jalankan perintah [yarn]/[npm] `android` lebih lengkapnya contoh `$ yarn android`

#### Project Structure

1. Folder `Pages` untuk pengeditan dan penambahan halaman baru dan styling setiap pages
```
src/
|- Pages/
```

2. Folder untuk icon, images dan fonts
```
src/
|- Assets/
```

3. untuk custom component ada pada folder
```
src/
|- Components/
```


berikut keseluruhan struktur folder:
```
Project/
App.js
|- src/
    |- Assets/
        |- Fonts/
            |- Roboto
        |- Icons
        |- Imgs
    |- Components
    |- Config/
        |- Helpers
        |- Navigations
        |- Storage/
            |- Actions
            |- Async
            |- Reducers
    |- Pages
|- android
|- ios
```