import HeaderNews from "../components/HeaderNews";
import NewsContainer from "../components/NewsContainer";
import NewsScroller from "../components/NewsScroller";

function FeaturedHome ({FeaturedStories}) {

  return (
    <>
      <section id="featured">
        <HeaderNews firstStory={FeaturedStories.data[0]}/>
        <NewsContainer stories={FeaturedStories.data.slice(1, 4)} />
        <NewsScroller stories={FeaturedStories.data.slice(4, 7)} />
        <NewsContainer stories={FeaturedStories.data.slice(7, 10)} />
      </section>
    </>
  )
}

export default FeaturedHome;