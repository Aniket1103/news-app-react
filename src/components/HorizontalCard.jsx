import StoryTitle from "../components/StoryTitle";
function Horizontal ({story}) {
  console.log("Vertical", story)
  return (
    <>
      <article className="horizontal-news-card">
        <a href={story.link} className="news-card-link">
          <img src={story["featured-image"]} alt="News Image" className="news-card-image" />
          <StoryTitle {...story} />
        </a>
      </article>

    </>
  )
}

export default Horizontal;