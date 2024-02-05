import GlobalStyles from './GlobalStyles';
import * as S from './App.style';
import AppRoutes from './router';

function App() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            <GlobalStyles />
            <S.Wrapper>
                <S.Container>
                    <AppRoutes user={user} />
                </S.Container>
            </S.Wrapper>
        </>
    );
}

export default App;
