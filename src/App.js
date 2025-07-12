import './App.css';
import { ItemList } from './components/item-list';
import { AboutPage } from './components/page/about';
// import { AccountPage } from './components/page/account';
import { ContactsPage } from './components/page/contacts';
import { ErrorPage } from './components/page/error';
import { MainPage } from './components/page/main';
import { Route,BrowserRouter,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>} >
        <Route index element={<ItemList/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="contacts" element={<ContactsPage/>} />        
        <Route path="*" element={<ErrorPage/>} />
      </Route>
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
