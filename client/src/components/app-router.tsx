import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';

const AppRouter = () => (
    <Routes>
        <Route path="/surreality" element={<Home />} />
        <Route path="/surreality/about" element={<About />} />
        <Route path="/surreality/contact" element={<Contact />} />
        {/* <Route path="/series/:id" element={<Series />} /> */}
    </Routes>
);

export default AppRouter;
