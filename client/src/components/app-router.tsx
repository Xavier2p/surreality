import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import PageNotFound from '../pages/404';
import Series from '../pages/series';

const AppRouter = () => (
    <Routes>
        <Route path="/surreality" element={<Home />} />
        <Route path="/surreality/about" element={<About />} />
        <Route path="/surreality/contact" element={<Contact />} />
        <Route path="/surreality/series/:id" element={<Series />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
);

export default AppRouter;
