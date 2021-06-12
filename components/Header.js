import headerStyles from '../styles/Header.module.css'

/**
* @author
* @function Header
**/

const Header = (props) => {
    console.log("from header")
    console.log(props)
  return(
    <div>
        <h1 className={headerStyles.title}>
            <span>React-Native</span> Quiz
        </h1>
        <p className={headerStyles.description}></p>
    </div>
   )

}

export default Header