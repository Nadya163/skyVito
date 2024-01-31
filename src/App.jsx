import { GlobalStyles } from './GlobalStyles';
import * as S from './App.style';
import AppRoutes from './router'

function App() {
  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <S.Container>
          <AppRoutes />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
