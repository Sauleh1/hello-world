import Link from "next/link"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

const HomePage = () => {
	return (
		<main className = {styles.main}>
			<body className = {inter.className}>
				<h1>Hello World</h1>
				<Link href="/about">Go to About Page</Link>
			</body>
		</main>
	)
}

export default HomePage