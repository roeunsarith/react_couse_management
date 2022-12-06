// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import HomePage from './page/home/HomePage';
import CategoryPage from './page/category/CategoryPage';
import CategoryCreatePage from './page/category/CategoryCreatePage';
import CategoryEditPage from './page/category/CategoryEditPage';
import CoursePage from './page/course/CoursePage';
import CourseCreatePage from './page/course/CourseCreatePage';
import CourseEditPage from './page/course/CourseEditPage';
import SignInPage from './page/sign in/SignInPage';
import SignUpPage from './page/sign up/SignUpPage';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import Header from './components/header/header';
import InvoicePage from './page/InvoicePage';
function App() {
  return (
   <BrowserRouter>
    <Header>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/category' element={<CategoryPage/>}/>
          <Route path='/category/create' element={<CategoryCreatePage/>}/>
          <Route path='/category/edit/:id' element={<CategoryEditPage/>}/>
          <Route path='/course' element={<CoursePage/>}/>
          <Route path='/course/create' element={<CourseCreatePage/>}/>
          <Route path='/course/edit/:id' element={<CourseEditPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/signin' element={<SignInPage/>}/>
          <Route path='/*' element={<InvoicePage/>}/>
      </Routes>
    </Header>
   </BrowserRouter>
  );
}

export default App;
