import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, useState } from "react";
import GoogleCallback from './components/auth/GoogleCallback';
// import AccessPanel from './components/auth/AccessPanel';

// Lazy loading de los componentes
const Footer = lazy(() => import('./components/global/Footer'));

const Header = lazy(() => import("./components/global/Header"));

const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const UserProfile = lazy(() => import("./pages/Profile"));

const ProtectedRoute = lazy(() => import("./components/global/ProtectedRoute"));
// const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    const [loadingPage, setLoadingPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [failPageLoad, setFailPageLoad] = useState(false);

    return (
        <BrowserRouter>
            <header>
                <Suspense fallback={<div></div>}>
                    <Header/>
                </Suspense>
            </header>

            <main>
                <Suspense fallback={<div></div>} onError={() => setFailPageLoad(true)}>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/google-callback" element={<GoogleCallback/>} />
                        <Route path="/profile" element={ <UserProfile /> } />
                    </Routes>            
                </Suspense>

                <Suspense fallback={<div></div>}>
                    <Footer />
                </Suspense>


                {/* <AccessPanel/> */}
            </main>
        </BrowserRouter>
    );
}

export default App;
