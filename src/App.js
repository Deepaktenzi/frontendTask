import './App.css';
import './App.scss';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const approuter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={approuter} />;
}

export default App;
