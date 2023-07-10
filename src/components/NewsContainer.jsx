import VerticalCard from "../components/VerticalCard";

function NewsContainer({ stories }) {
  console.log("NewsContainer", stories);
  return (
    <>
      <section className="news-container">
        {
          stories.map((story, index) => {
            return (
              <>
                <VerticalCard story={story} />
                {
                  index < stories.length && 
                  <hr />
                }
              </>
            )
          })
        }
      </section>
      
    </>
  );
}

export default NewsContainer;
