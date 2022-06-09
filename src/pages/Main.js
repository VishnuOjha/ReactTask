import { useCallback,  useLayoutEffect, useState } from "react";
import DetailsPage from "./DetailsPage";
import Footer from "./Footer";
import Header from "./Header";

export default function Main() {
  const [visited, setVisited] = useState("");
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState("");
  const [count, setCount] = useState("");

  useLayoutEffect(() => {
    const retunData = JSON.parse(localStorage.getItem("back"));
    if (retunData) {
      setVisited(retunData);
      localStorage.clear();
    }
  }, []);

  const keyEvent = useCallback((e) => {
    if (e.key === "Escape") {
      setVisible(false);
    }
    if (e.key === "Enter") {
      setVisible(true);
    }
  }, []);

  useLayoutEffect(() => {
    document.addEventListener("keydown", keyEvent, false);
  }, [keyEvent]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Header fill={visited} setSelected={setSelected} count={count} />
      <DetailsPage
        visible={visible}
        selected={selected}
        visited={visited}
        setCount={setCount}
        count={count}
      />
      <Footer />
    </div>
  );
}