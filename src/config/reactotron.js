import Reactotron, {
  networking,
  trackGlobalErrors,
} from "reactotron-react-native";

import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

import AsyncStorage from "@react-native-community/async-storage";

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: "192.168.1.13" })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .use(networking())
    .use(trackGlobalErrors())
    .connect();

  tron.clear();

  console.tron = tron;
}
