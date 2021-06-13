import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = (props) => {
    return ( 
    <div className={navStyles.nav}>
       <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/about'>About</Link>
        </li>
        <li>
            <Link href='/forms'>Forms</Link>
        </li>
        <li>
            <Link href='/jsonQuestions'>JsonQuestions</Link>
        </li>
        <li>
            <Link href='/quiz'>Quiz</Link>
        </li>
       </ul> 
    </div>
    )

}

export default Nav