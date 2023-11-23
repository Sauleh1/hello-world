import Link from "next/link"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

const HomePage = () => {
	return (
		<main className = {styles.main}>
			<body className = {inter.className}>
				<h1 className = "Change1">Hello World</h1>
				<a href = "/about">
					<button className="ChangeLink1">Go to About Page</button>	
				</a> <br />
			</body>
			<button className="ChangeButton1">Button</button>
		</main>
	)
}

export default HomePage