import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <ul>
          <li>
            <a href="/auth">Login</a>
          </li>
          <li>
            <a href="/profile">Profile (Login required)</a>
          </li>
        </ul>
      </div>
    </main>
  )
}
