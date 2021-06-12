import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import { connect } from 'react-redux'
import { initializeStore } from '../store'


const mapStateToProps = state => getServerSideProps()
const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (question) => dispatch({type: 'ADDQUESTION',
    question: question})
    }
}

const getServerSideProps = () => {
  const reduxStore = initializeStore()
  return reduxStore.getState()
}
/**
* @author
* @function Layout
**/

const Layout = ({children}) => {
  return(
    <>
    <Nav/>
    <div className={styles.container}>
        <main className={styles.main}>
        <Header />
            {children}
        </main>
    </div>
    </>
   )

 }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)