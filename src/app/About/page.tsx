import { Inter } from "next/font/google"
import Link from "next/link"
import styles from "./styles.module.css"

const inter = Inter({ subsets: ['latin'] })

function AboutPage() {
    return (
        <main className = {styles.main}>
            <div>About Page</div>
            <Link href="/">Link to Home page</Link>
        </main>
    )
}

export default AboutPage