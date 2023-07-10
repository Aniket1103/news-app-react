function HeaderNews({firstStory}) {
    console.log("firstStory", firstStory)
    return (
        <>
            <header >
                <a href={firstStory.link}>
                    <h2 className="head-news-title">
                        <span className="news-category">{firstStory.category || "alt"} :</span>
                        {firstStory.title}
                    </h2>
                    <img src={firstStory["featured-image"]} alt="alt" className="header-img" />
                </a>
            </header>
        </>
    )
}

export default HeaderNews;