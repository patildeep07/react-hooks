import React from "react";
import { useNavigate } from "react-router";
import Styles from "./Intro.module.css";

const data = [
  {
    id: 1,
    name: "useState",
    link: "/useState",
  },
  {
    id: 2,
    name: "useEffect",
    link: "/useEffect",
  },
  {
    id: 3,
    name: "useRef",
    link: "/useRef",
  },
  {
    id: 4,
    name: "useMemo",
    link: "/useMemo",
  },
  {
    id: 5,
    name: "useCallback",
    link: "/useCallback",
  },
];

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div className={Styles.IntroContainer}>
      <h1>Welcome to react hooks!</h1>
      {data.map(({ id, name, link }) => {
        return (
          <button
            className={Styles.NavButton}
            key={id}
            onClick={() => navigate(`${link}`)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Intro;
