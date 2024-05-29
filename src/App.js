import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home';
import About from './component/About/About';
import Courses from './component/Courses/Courses';
import Instructors from './component/Instructors/Instructors';
import Events from './component/Events/Events';
import Contact from './component/Contact/Contact';
import Main from './Layout/Main';
import Blogs from './component/Blogs/Blogs';
import UserDetails from './component/UserDetails/UserDetails';
import SignUp from './component/SignUp/SignUp';
import Header from './component/Header/Header';
import PrivateRoute from './Route/PrivateRoute';
import Course from './component/Course/Course';

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main>
            </Main>,
            children: [
                { path: '/', element: <Home></Home> },
                { path: 'Home', element: <Home></Home> },
                {
                    path: 'Courses', element: <PrivateRoute><Courses></Courses></PrivateRoute>
                },

                { path: 'SignUp', element: <SignUp></SignUp> },
                { path: 'about', element: <About></About> },
                {
                    path: 'Courses',
                    element: <Courses></Courses>
                },
                { path: 'Instructors', element: <Instructors></Instructors> },
                { path: '/Events', element: <Events></Events> },
                { path: '/Contact', element: <Contact></Contact> },
                { path: '/Course', element: <Course></Course> },
                {
                    path: '/Blogs',
                    loader: async () => {
                        return fetch('https://jsonplaceholder.typicode.com/users')
                    },
                    element: <Blogs>Blogs</Blogs>
                },
                {
                    path: '/users/:name',
                    loader: async ({ params }) => {
                        return fetch(`https://jsonplaceholder.typicode.com/users/${params.name}`)
                    },
                    element: <UserDetails></UserDetails>,

                }
            ]
        },
        { path: '*', element: <div>This 404 page/route not found</div> },



    ])
    return (
        <div className="App">

            <RouterProvider router={router}></RouterProvider>

        </div>
    );
}
export default App;
