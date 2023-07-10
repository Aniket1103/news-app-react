import HeaderNews from "../components/HeaderNews";
import NewsContainer from "../components/NewsContainer";

function FeaturedHome ({FeaturedStories}) {

  return (
    <>
      <section id="#featured">
        <HeaderNews firstStory={FeaturedStories.data[0]}/>
        <NewsContainer stories={FeaturedStories.data.slice(1, 4)} />
      </section>
    </>
  )
}

export default FeaturedHome;