import "./App.scss";
import { Provider } from "react-redux";
// import { MainContainer } from './hoc/main'
import MainRoute from "./routes/routes.tsx";
import { store } from "./store/store";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { APIGetMyDetails } from "./api/auth.ts";
import { useEffect } from "react";
import { saveUser } from "./utils/helpers/tokenStorage.helper.ts";

function App() {
  const getUserData = async () => {
    try {
      const res = await APIGetMyDetails();
      saveUser(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MantineProvider>
            {/* Your app here */}
            <MainRoute />
          </MantineProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
