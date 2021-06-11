import articleStyles from '../styles/Articles.module.css'

/**
* @author
* @function ArticleList
**/

const ArticleList = ({articles}) => {
  return(
    <div className={articleStyles.grid}>
      {articles.map((article)=>{
        return <h3>{article.title}</h3>
      })}
    </div>
   )

 }

export default ArticleList