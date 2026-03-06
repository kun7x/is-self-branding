import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Qualification from './pages/Qualification';
import Contact from './pages/Contact';

export default function App() {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/qualification" element={<Qualification />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}
