import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Indie Founders",
	description: "Home for the indie french founders community.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="h-20">
					<div className="flex items-center justify-between container h-full max-w-5xl">
						<div className="flex items-center">
							<a href="/" className="text-primary">
								Indie Founders
							</a>
						</div>
						<div className="flex items-center gap-8">
							{/* <a href="/about" className="text-primary">
								About
							</a>
							<a href="/contact" className="text-primary">
								Contact
							</a> */}
						</div>
					</div>
				</nav>
				{children}
			</body>
		</html>
	)
}
