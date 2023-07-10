function StroyTitle ({ category, title}) {

  return (
    <>
      <h2 className="news-title">
        <span className="news-category"> {category && `${category} :`} </span>
        {title}
      </h2>
    </>
  )
}

export default StroyTitle;