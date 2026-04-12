"use client";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 80);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
			<div
				className={`flex items-center gap-6 px-3 py-3 justify-between 
        transition-all duration-500 ease-in-out will-change-transform
        
        ${
					scrolled
						? "w-[40vw] max-w-5xl bg-neutral-950 backdrop-blur-md"
						: "w-screen max-w-screen-xl"
				}`}
			>
				<div className="font-heading text-lg">Logo</div>

				<div className="hidden md:flex gap-6">
					<a href="#">Home</a>
					<a href="#">About</a>
					<a href="#">Home</a>
					<a href="#">About</a>
				</div>

				<Button size="lg">Get Started</Button>
			</div>
		</nav>
	);
}
