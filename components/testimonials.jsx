import React from "react";
import { Badge } from "./ui/badge";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
	{
		text: "This tool transformed how our team collaborates overnight.",
		name: "James Porter",
		role: "CEO, Norse Star",
		image:
			"https://framerusercontent.com/images/zxIrLmdyDyMARFNftCJyxG50a8.webp?width=900&height=921",
		colSpan: "lg:col-span-2",
	},
	{
		text: "We replaced five tools with one platform. Our cost and complexity dropped overnight.",
		name: "James Porter",
		role: "CEO, Norse Star",
		image:
			"https://framerusercontent.com/images/zxIrLmdyDyMARFNftCJyxG50a8.webp?width=900&height=921",
		colSpan: "lg:col-span-4",
	},
	{
		text: "Onboarding new team members dropped from days to minutes.",
		name: "James Porter",
		role: "CEO, Norse Star",
		image:
			"https://framerusercontent.com/images/TH1kuHfF1vRWxgEbFxTCCEFKOQ.webp?width=900&height=979",
		colSpan: "lg:col-span-2",
	},
	{
		text: "Our team’s productivity soared in just days.",
		name: "James Porter",
		role: "CEO, Norse Star",
		image:
			"https://framerusercontent.com/images/zxIrLmdyDyMARFNftCJyxG50a8.webp?width=900&height=921",
		colSpan: "lg:col-span-2",
	},
	{
		text: "Reliable, flexible, and the support is genuinely helpful.",
		name: "James Porter",
		role: "CEO, Norse Star",
		image:
			"https://framerusercontent.com/images/zxIrLmdyDyMARFNftCJyxG50a8.webp?width=900&height=921",
		colSpan: "lg:col-span-2",
	},
];

export default function Testimonials() {
	return (
		<section className="section container">
			<Badge>Testimonials</Badge>

			<h1 className="heading-secondary mt-4">What our customers say</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mt-12 auto-rows-auto">
				{testimonials.map((item, index) => (
					<Card
						key={index}
						className={`bg-[#121212] p-4 sm:p-5 ${item.colSpan} lg:row-span-3`}
					>
						<CardHeader className="flex flex-col justify-between gap-12 h-full">
							{/* Top section */}
							<div className="flex flex-wrap gap-2 justify-between items-center w-full">
								<Image src="/logo.png" width={100} height={24} alt="logo" />

								<div className="flex">
									{Array.from({ length: 5 }).map((_, i) => (
										<svg
											key={i}
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="size-4 sm:size-5 text-secondary"
										>
											<path
												fillRule="evenodd"
												d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
												clipRule="evenodd"
											/>
										</svg>
									))}
								</div>
							</div>

							{/* Text */}
							<p className="text-white text-base sm:text-lg lg:text-xl mt-4">
								{item.text}
							</p>

							{/* User */}
							<div className="flex gap-3 items-center mt-6">
								<Image
									src={item.image}
									width={40}
									height={40}
									className="rounded-full"
									alt={item.name}
								/>
								<div>
									<span className="text-white text-sm sm:text-base">
										{item.name}
									</span>
									<p className="text-xs sm:text-sm text-muted-foreground">
										{item.role}
									</p>
								</div>
							</div>
						</CardHeader>
					</Card>
				))}
			</div>
		</section>
	);
}
