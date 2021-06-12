import articleStyles from '../styles/Articles.module.css';

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article)=>{
        return <h3>{article.title}</h3>
      })}
    </div>
   )

}

export default ArticleList