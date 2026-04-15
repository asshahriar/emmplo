import React from "react";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { IoPeople } from "react-icons/io5";

const benefits = [
	{
		id: 1,
		title: "Performance insights",
		description: "Easy-to-read metrics that help you understand results.",
		icon: <IoPeople size={34} color="#fff" />,
	},
	{
		id: 2,
		title: "Performance insights",
		description: "Easy-to-read metrics that help you understand results.",
		icon: <IoPeople size={34} color="#fff" />,
	},
	{
		id: 3,
		title: "Performance insights",
		description: "Easy-to-read metrics that help you understand results.",
		icon: <IoPeople size={34} color="#fff" />,
	},
];

export default function Benefits() {
	return (
		<section className="section container">
			<Badge>Key capabilities</Badge>
			<h1 className="heading-secondary max-w-2xl mt-4">
				Explore the building blocks of your workflow
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
				{benefits.map((benefit) => (
					<Card
						key={benefit.id}
						className="relative  bg-[#121212] mx-auto w-full max-w-sm py-6"
					>
						<CardHeader>
							<div className="mb-3 border-2 border-white/10 w-fit p-1">{benefit.icon}</div>
							<CardTitle className="text-white">{benefit.title}</CardTitle>
							<CardDescription>{benefit.description}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</section>
	);
}
