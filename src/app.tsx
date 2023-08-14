import React, {lazy, Suspense, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const MainPage = lazy(() => import('./pages/main-page'));
const AboutPage = lazy(() => import('./pages/about-page'));

export const App = () => {
  const {toggleTheme, theme} = useTheme();
  const [hovered, setHovered] = useState(false);
  return (
    <div className={classNames("app", {hovered}, [theme])}>
      <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link>
      <button onClick={() => {
        setHovered((d) => !d);
        toggleTheme();
      }}>Toggle Theme
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes></Suspense>
    </div>
  );
};

