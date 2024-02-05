import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as S from './Nav.style';

export default function Nav() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleProfile = () => {
        navigate('/profile');
    };

    const handleArticle = () => {
        navigate('/myarticle');
    };

    return (
        <S.Header>
            <S.HeaderNav>
                {location.pathname === '/' ? (
                    <Link to="/signin">
                        <S.HeaderBtnMainEnter type="button">
                            Вход в личный кабинет
                        </S.HeaderBtnMainEnter>
                    </Link>
                ) : (
                    <>
                        <S.HeaderBtnMainEnt
                            type="button"
                            onClick={handleArticle}
                        >
                            Разместить объявление
                        </S.HeaderBtnMainEnt>
                        <S.HeaderBtnMainPersonalArea
                            type="button"
                            onClick={handleProfile}
                        >
                            Личный кабинет
                        </S.HeaderBtnMainPersonalArea>
                    </>
                )}
            </S.HeaderNav>
        </S.Header>
    );
}
