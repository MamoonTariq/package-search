import { Provider } from "react-redux";
import { store } from "../store";
import PackagesList from "./PackagesList";

const App = () => {
  return (
    <Provider store={store}>
      <div>Search Package</div>
      <PackagesList />
    </Provider>
  );
};

export default App;
