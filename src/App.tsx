import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AuthLayout from './layout/AuthLayout';
import Contacts from './pages/Contacts';
import Testimonials from './pages/testimonials';
import NewsFeedComponent from './pages/newsFeed';
import SettingsPage from './pages/settingPage';
import VerificationPage from './pages/verify-mail';
import ImageUploadCarousel from './pages/imageUploadPage';
import PortfolioComponent from './pages/portFolio';
import Newspaper from './pages/newsPaper';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
    
          <Route path="/login" element={<Login />} />
          <Route path="/verify-mail" element={<VerificationPage />} />
          Newspaper
          <Route path="/news" element={<Newspaper />} />

          {/* Wrap protected routes inside AuthLayout */}
          <Route
            path="/contacts"
            element={
              <AuthLayout>
                <Contacts />
              </AuthLayout>
            }
          />
            <Route
            path="/setting"
            element={
              <AuthLayout>
                <SettingsPage />
              </AuthLayout>
            }
          />
            <Route
            path="/testimonials"
            element={
              <AuthLayout>
                <Testimonials />
              </AuthLayout>
            }
          />
            <Route
            path="/news-feed"
            element={
              <AuthLayout>
                <NewsFeedComponent />
              </AuthLayout>
            }
          />
          

          <Route
            path="/portfolio"
            element={
              <AuthLayout>
                <PortfolioComponent />
              </AuthLayout>
            }
          />
           <Route
            path="/image-carousel"
            element={
              <AuthLayout>
                <ImageUploadCarousel />
              </AuthLayout>
            }
          />
          
          <Route
            path="/"
            element={
              <Navigate to="/news-feed" replace />
           
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
