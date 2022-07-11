
// import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './router/Layout';
import Home from './router/Home';
import Contact from './router/Contact';
import Blogs from './router/Blogs';
import NoPage from './router/NoPage';
// import IncDec from './IncDec';
// import Parent from './ParentToChild/Parent';
// import TodoList from './todore/TodoList';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout></Layout> }/>
          <Route path='Home' element={ <Home></Home> } />
          <Route path='blogs' element={<Blogs/>} />
          <Route path='Contact' element={<Contact />} />
          <Route path='*' element={<NoPage/>} />
         </Routes>
      </BrowserRouter>
      {/* <TodoList></TodoList> */}
     {/* <Parent></Parent> */}
    
    </div>
  );
}

export default App;
