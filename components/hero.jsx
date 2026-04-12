import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="container mt-40 lg:mt-56">
			<Image src="/heroBG.png" quality={100} fill className="-z-10 object-contain absolute" alt="hero background image"/>
			<div className="flex items-center justify-center flex-col text-center">
				<Badge variant="destructive" className="mb-4">New Spring Update</Badge>
				<h1 className="heading-primary max-w-[20ch] mb-2">Your projects deserve to stand out</h1>
				<p className="mb-6 max-w-[40ch]">
					Upload your files and let our platform transform them into polished,
					professional results in seconds.
				</p>
				<Button size="lg">Watch Video</Button>
			</div>
			<div className="mt-12">
				<Image src="/hero.avif" width={1186} height={769} className="object-contain mx-auto border-4 border-neutral-800" alt="hero dashboard image"/>
			</div>
		</section>
	);
}
