import NewsContainer from "../components/NewsContainer";
import NewsScroller from "../components/NewsScroller";

function Manoranjan ({manoranjanStories}) {

  return (
    <>
      <section id="manoranjan">
        <h3>Manoranjan</h3>
        <NewsScroller stories={manoranjanStories.data.slice(0, 3)} />
        <NewsContainer stories={manoranjanStories.data.slice(3, 6)} />
      </section>
    </>
  )
}

export default Manoranjan;