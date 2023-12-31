import React, { useState, useEffect } from 'react';
import { getDevice }  from '../js/framework7-custom.js';
import {
  f7,
  f7ready,
  App,
  View,
} from 'framework7-react';
import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {

  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: 'Brilho', // App name
      theme: 'auto', // Automatic theme detection
      // App store
      store: store,
      // App routes
      routes: routes,
      // Input settings
      input: {
        scrollIntoViewOnFocus: device.cordova,
        scrollIntoViewCentered: device.cordova,
      },
      // Cordova Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
  };

  f7ready(() => {
    // Init cordova APIs (see cordova-app.js)
    if (f7.device.cordova) {
      cordovaApp.init(f7);
    }

    // Call F7 APIs here
  });

  return (
    <App { ...f7params }>

        {/* Your main view, should have "view-main" class */}
        <View
        id="view-app"
        main
        url="/home" />

    </App>
  );
}
export default MyApp;