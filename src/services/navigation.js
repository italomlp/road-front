import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  console.tron.log('navigating');
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

export { navigate, setTopLevelNavigator };
