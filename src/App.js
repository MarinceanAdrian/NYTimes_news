// dependencies
import {
  useEffect,
  useState,
  useContext,
  lazy,
  Suspense,
  useCallback,
} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// other
import themeContext from "./context/ThemeContext/theme-context";
import modalContext from "./context/ModalContext/modal-context";
import authContext from "./context/AuthContext/auth-context";
// lazy loaded Components
const MovieList = lazy(() => import("./components/MovieList"));
const MainHeader = lazy(() => import("./components/UI/MainHeader"));
const Footer = lazy(() => import("./components/UI/Footer"));
const Input = lazy(() => import("./components/Input/Input"));
const Home = lazy(() => import("./components/pages/Home/Home"));
const About = lazy(() => import("./components/pages/About"));
const Form = lazy(() => import("./components/pages/Form/Form"));
const ModalOutput = lazy(() => import("./components/UI/Modal/Modal"));
const ReadLater = lazy(() => import('./components/pages/ReadLater'));

import "./styles.css";

const API_KEY = "HM1w9e2d2XwzrCTQcaVOWQuk5ehs1ASR";

// control var that doens't re-recreate whenever App is re-rendered
let openModal = true;

const App = () => {
  // state
  const [news, setNews] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [selectedNews, setSelectedNews] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // context
  const theme = useContext(themeContext);
  const modalCtx = useContext(modalContext);
  const authCtx = useContext(authContext);

  const handleSelectedNewsType = useCallback(
    (selectedNewsType) => {
      // redirect to auth page if not authenticated
      //* remember to specify useCallback() dependencies (wasted a day because [])
      if (!authCtx.authState.userInfo.displayName) {
        modalCtx.openModalAuthHanlder();
        return;
      }
      setSelectedNews(selectedNewsType);
    },
    [authCtx]
  );

  useEffect(() => {
    if (openModal) {
      setTimeout(() => modalCtx.openModalHomeHandler(), 4000);
      openModal = false;
    }
  }, []);

  useEffect(() => {
    const fetchInitialNews = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`
      );

      if (!response.ok) {
        console.log("failed to fetch");
      }

      const responseData = await response.json();

      if (!responseData.results) {
        setError("Please enter a valid name");
        console.log("please enter a valid name");
        return;
      }

      console.log(responseData.results);
      setNews(responseData.results.slice(0, 10));
      setIsLoading(false);
    };

    try {
      fetchInitialNews();
    } catch (err) {
      setError(err.message);
      console.log("failed to fech");
    }
  }, []);

  useEffect(() => {
    const fetchNewNewsType = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/${selectedNews}.json?api-key=${API_KEY}`
      );

      const responseData = await response.json();

      if (!responseData.results) {
        throw new Error("failed to fecth selected news");
      }

      setNews(responseData.results.slice(0, 10));
      setIsLoading(false);
    };
    try {
      fetchNewNewsType().catch((err) => setError(err.message));
    } catch (err) {
      setError(err.message);
    }
  }, [selectedNews]);

  // de vazut daca e bad parctice - modificare directa a DOM-ului
  const setBodyDarkTheme = theme.isDarkTheme ? "black" : "whitesmoke";
  document.body.style.background = setBodyDarkTheme;

  return (
    <div>
      <Suspense fallback>
        <ModalOutput />
        <MainHeader />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/auth" element={<Form />}></Route>
          <Route path="/readLater" element={<ReadLater />}></Route>
          <Route
            path="/"
            element={
              <Suspense fallback={<h2>Loading</h2>}>
                <Home>
                  <Input
                    type="text"
                    onSelectNewNewsType={handleSelectedNewsType}
                    value={selectedNews}
                  />
                  <MovieList news={news} isLoading={isLoading} />
                  <Footer />
                </Home>
              </Suspense>
            }
          ></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
