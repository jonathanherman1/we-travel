import styles from './Landing.module.css'

const Landing = ({user}) => {
  return (
    <main className={styles.container}>
      <h1>
        Hello, {user ? user.name : "friend"}
      </h1>

      <h2>Where will you travel next?</h2>
    </main>
  )
}
 
export default Landing