
import './App.css';
import HomePage from './Page/HomePage';
import AboutPage from './Page/AboutPage';
import LoginPage from './Page/LoginPage';
import RegisterPage from './Page/RegisterPage';
import Route404page from './Page/Route404Page';
import CategoryCreatePage from './Page/CategoryCreatePage';
import CategoryEditPage from './Page/CategoryEditPage';
import ProductPage from './Page/ProductPage';
import Header1 from './components/header/Header1';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import CategoryPage from './Page/CategoryPage';

function App() {
 
  return (

    <BrowserRouter>
      <Header1>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='/category' element={<CategoryPage/>}/>
            <Route path='/category/create' element={<CategoryCreatePage/>}/>
            <Route path='/category/edit/:id' element={<CategoryEditPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='*' element={<Route404page/>}/>
        </Routes>
      </Header1>
    </BrowserRouter>

      
  );
}

export default App;
