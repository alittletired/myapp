
//http://localhost:8081/index.android.bundle?platform=android&dev=true&hot=true&minify=false

import React from 'react';
import {AppRegistry} from 'react-native';
import app  from './js/setup';

AppRegistry.registerComponent('myapp',()=> app);
