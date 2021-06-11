import headerStyles from '../styles/Header.module.css'

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div>
        <h1 className={headerStyles.title}>
            <span>WebDev</span> News
        </h1>
        <p className={headerStyles.description}>Keep up with the latest web dev news</p>
    </div>
   )

}

export default Header