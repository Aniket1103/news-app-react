import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeaderNews from './components/HeaderNews'
import FeaturedHome from './widgets/FeaturedHome';

function App() {
  const newsEnpoint = "http://api.lokmat.com/assignmentassociate3";
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
        <FeaturedHome FeaturedStories={news[0]}/>
      }
    </>
  )
}

export default App
