import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FeaturedHome from './widgets/FeaturedHome';
import Manoranjan from './widgets/Manoranjan';
import WebStories from './widgets/WebStories';

function App() {
  console.log(import.meta.env.PROD)
  const newsEnpoint = (import.meta.env.PROD) ? "/api/assignmentassociate3" : "http://api.lokmat.com/assignmentassociate3";
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(newsEnpoint)
      .then((response) => response.json())
      .then((body) => {
        setNews(body);
        console.log("useEffect", news)
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
    
    console.log("console", news[0]?.data[0])

  return (
    <>
      <Navbar />
      {
        news.length > 0 && 
          <>
            <FeaturedHome FeaturedStories={news[0]}/>
            <WebStories WebStories={news[1]}/>
            <Manoranjan manoranjanStories={news[2]}/>
          </>
      }
    </>
  )
}

export default App
