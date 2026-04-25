import React from "react";
import { Badge } from "./ui/badge";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const cards = [
	{
		cardId: 1,
		title: "Track your performance",
		description:
			"Monitor progress with simple analytics that show how your work is performing.",
	},
	{
		cardId: 2,
		title: "Collaborate with your team",
		description:
			"Invite teammates or partners to share projects and work together seamlessly.",
	},
	{
		cardId: 3,
		title: "Organize yourself",
		description:
			"Keep everything structured with clear, easy-to-use calendars.",
	},
];

export default function Features() {
	return (
		<section id="features" className="container section">
			<Badge>Features</Badge>
			<h1 className="heading-secondary mt-4">
				Built for clarity, built for speed
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
				{cards.map((card) => (
					<Card size="" key={card.cardId} className="relative w-full pt-0 bg-[#121212]">
						<div className="absolute inset-0 z-30 aspect-video" />

						<img
							src="/cardImg.png"
							alt="Event cover"
							className="relative z-20 aspect-video w-full object-cover"
						/>

						<CardHeader>
							<CardTitle className="subtitle text-white">
								{card.title}
							</CardTitle>
							<CardDescription>{card.description}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</section>
	);
}
