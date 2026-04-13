import React from "react";
import { Badge } from "./ui/badge";
import { div, h4 } from "framer-motion/client";

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
		<section className="container section">
			<Badge>Features</Badge>
			<h1 className="heading-secondary mt-4">
				Built for clarity, built for speed
			</h1>

			<div className="flex gap-2 mt-12">
				{cards.map((card) => (
					<div key={card.cardId} className="bg-[#121212] p-3 space-y-2">
						<h4>{card.title}</h4>
						<p>{card.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
