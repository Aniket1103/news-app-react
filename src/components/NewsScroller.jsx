import HorizontalCard from "../components/HorizontalCard";

function NewsContainer({ stories }) {
  console.log("NewsContainer", stories);
  return (
    <>
      <section className="news-scroller">
        {
          stories.map((story, index) => {
            return (
              <>
                <HorizontalCard story={story} />
              </>
            )
          })
        }
      </section>
      <hr />
      
    </>
  );
}

export default NewsContainer;
