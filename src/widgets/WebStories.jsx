import NewsScroller from "../components/NewsScroller";

function WebStories ({WebStories}) {

  return (
    <>
      <section id="web-stories">
        <h3>Web Stories</h3>
        <NewsScroller stories={WebStories.data} />
      </section>
    </>
  )
}

export default WebStories;