import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './routes/Home'
import Privacy from './routes/Privacy'
import Support from './routes/Support'
import NotFound from './routes/NotFound'

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    )
}
