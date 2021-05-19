import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
// import CakeContainer from './components/CakeContainer'
// import HooksCakeContainer from './components/HooksCakeContainer'
// import IceCreamContainer from './components/IceCreamContainer'
// import NewCakeContainer from './components/NewCakeContainer'
// import ItemContainer from './components/ItemContainer'
//import ItemsContainer from "./components/ItemsContainer";
import AllTasksContainer from "./components/AllTasksContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <AllTasksContainer />
        
        {/* <ItemContainer cake />
        <ItemsContainer />
        <ItemContainer />
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
