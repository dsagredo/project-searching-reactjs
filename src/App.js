import { useState, useEffect } from "react";
import axios from "axios";
import Searcher from "./components/Searcher";
import Results from "./components/Results";

const App = () => {
  const [isInfo, setInfo] = useState('');
  const [isPag, setPag] = useState(1);
  const [isTilte, setTitle] = useState();

  const queryUrl = async (value, page) => {
    const url = `https://pixabay.com/api/?key=30574607-5270ac4a7557570174723680d&q=${value}&per_page=30&page=${page}`;
    const {data} = await axios.get(url);
    setInfo(data.hits);
  };

  const onSearch = (value) => {
    queryUrl(value);
    setTitle(value);
  };

  const pagePrev = () => {
    if(isPag === 1) return null;
    setPag(isPag - 1);
  };

  const pageNext = () => setPag(isPag + 1);

  useEffect(() => {
    queryUrl(isTilte, isPag);
  }, [isTilte, isPag]);

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Busscador de Imágenes</p>
        <Searcher onSearch={onSearch} />
      </div>
      <Results isInfo={isInfo} pagePrev={pagePrev} pageNext={pageNext} />
    </div>
  );
}

export default App;
