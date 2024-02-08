import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';
import Article from './pages/Article/Article';
import MyArticle from './pages/MyArticle/MyArticle';
import Profile from './pages/Profile/Profile';
import SellerProfile from './pages/SellerProfile/SellerProfile';
import Signin from './pages/Signin/login';
import Signup from './pages/Signup/Signup';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function AppRoutes({ user }) {
    return (
        <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="/article/:id" element={<Article />} />
                <Route path="/sellerprofile/:id" element={<SellerProfile />} />S
                <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                    <Route path="/main" element={<Main />} />
                    <Route path="/myarticle" element={<MyArticle />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default AppRoutes;
