import WeatherCard from "./components/WeatherCard";
import { Provider } from "react-redux/es/exports";
import store from "./redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <WeatherCard />
      </Provider>
    </>
  );
};

export default App;
