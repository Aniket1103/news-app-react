import StoryTitle from "../components/StoryTitle";
function VerticalCard ({story}) {
  console.log("Vertical", story)
  return (
    <>
      <article className="verticle-news-card">
        <a href={story.link} className="news-card-link">
          <img src={story["featured-image"]} alt="News Image" className="news-card-image" />
          <StoryTitle {...story} />
        </a>
      </article>

    </>
  )
}

export default VerticalCard;