import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

const initializeApp = async () => {
  if (Capacitor.isNativePlatform()) {
    // Hide splash screen
    await SplashScreen.hide();
    
    // Set status bar style
    await StatusBar.setStyle({ style: Style.Default });
  }
  
  console.log('Capacitor app initialized');
};

initializeApp();