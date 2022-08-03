// import { CommonActions } from '@react-navigation/native';
// let navigator;

// export const setNavigator = nav => {
//     navigator = nav;
// };

// export const navigate = (routeName, params ) =>{
//     navigator.dispatch(
//         CommonActions.navigate({
//             routeName,
//             params
//         })
//     );
// }

// RootNavigation.js

import { createNavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.navigate(name, params);
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}