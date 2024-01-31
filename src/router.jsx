import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';
import Article from './pages/Article/Article';
import MyArticle from './pages/MyArticle/MyArticle';
import Profile from './pages/Profile/Profile';
import SellerProfile from './pages/SellerProfile/SellerProfile';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="/article" element={<Article />} />
                <Route path="/myarticle" element={<MyArticle />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/sellerprofile" element={<SellerProfile />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
