import './App.scss'
import { Provider } from 'react-redux'
// import { MainContainer } from './hoc/main'
import MainRoute from "./routes/routes.tsx";
import { store } from './store/store'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {BrowserRouter} from "react-router-dom";

function App() {

  return (
    <>
         <Provider store={store}>
             <BrowserRouter>
                 <MantineProvider>{/* Your app here */}
                     <MainRoute />
                 </MantineProvider>
             </BrowserRouter>
         </Provider>
    </>
  )
}

export default App
