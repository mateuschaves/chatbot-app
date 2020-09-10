import { NavigationActions, StackActions } from "react-navigation";

let navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  navigator = navigatorRef;
}

function push(routeName: string, params: object) {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    })
  );
}

function navigate(routeName: string, params: object, action: any) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
    })
  );
}

function replace(routeName: string, params: object) {
  navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    })
  );
}

function popToTop() {
  navigator.dispatch(StackActions.popToTop());
}

function reset(routeName: string, params: object) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    })
  );
}

function back() {
  navigator.dispatch(NavigationActions.back());
}

function setParams(route: string, params: object) {
  navigator.dispatch(
    NavigationActions.setParams({
      params,
      key: route,
    })
  );
}
// add other navigation functions that you need and export them

export default {
  push,
  navigate,
  replace,
  popToTop,
  reset,
  back,
  setTopLevelNavigator,
  setParams,
};
