import useAuth from "./hooks/useAuth";
import useTheme from "./hooks/useTheme";
import useLocale from "./hooks/useLocale";
import LocaleContext from "./context/LocaleContext";
import ThemeContext from "./context/ThemeContext";
import LoadingPage from "./pages/LoadingPage";
import Header from "./components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import customRoutes from "./routes/customRoutes";
import NoMatchPage from "./pages/NoMatchPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";




function App() {

  const { initializing, authedUser, onLoginSuccess, onLogout } = useAuth();
  const { themeContextValue } = useTheme();
  const { localeContextValue } = useLocale();


  return (
    <div className="App">
      <LocaleContext.Provider value={localeContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          {initializing ? (<LoadingPage />) : (
            <div className="">
              <Header
                logout={onLogout}
                isAuthed={authedUser !== null}
                name={authedUser?.name || ''}
              />
              <Routes>
                {authedUser ?
                  (<>
                    <Route path='/login' element={<Navigate to='/' replace />} />
                    {customRoutes.map((route) => (
                      <Route key={route.path} path={route.path} element={<route.element />} />
                    ))}
                    <Route path='*' element={<NoMatchPage />} />
                  </>) :
                  (<>
                    <Route path='*' element={<Navigate to='/login' replace />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage loginSuccess={onLoginSuccess} />} />
                  </>)}

              </Routes>
            </div>



          )}
        </ThemeContext.Provider>

      </LocaleContext.Provider>
    </div>
  );
}

export default App;
