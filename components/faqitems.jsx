import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		value: "item-1",
		question: "How does the platform work",
		answer:
			"Our platform is designed to keep things simple. You upload your content, select the options that match your needs, and the system processes everything automatically. In just a few steps, you can go from start to finish without complexity.",
	},
	{
		value: "item-2",
		question: "How does the platform work",
		answer:
			"Our platform is designed to keep things simple. You upload your content, select the options that match your needs, and the system processes everything automatically. In just a few steps, you can go from start to finish without complexity.",
	},
	{
		value: "item-3",
		question: "How does the platform work",
		answer:
			"Our platform is designed to keep things simple. You upload your content, select the options that match your needs, and the system processes everything automatically. In just a few steps, you can go from start to finish without complexity.",
	},
	{
		value: "item-4",
		question: "How does the platform work",
		answer:
			"Our platform is designed to keep things simple. You upload your content, select the options that match your needs, and the system processes everything automatically. In just a few steps, you can go from start to finish without complexity.",
	},
];

export default function FAQItems() {
	return (
		<div>
			{faqs.map((faq, index) => (
				<Accordion key={index} type="single" collapsible defaultValue="item-1" className="w-auto md:w-md   mb-4">
					<AccordionItem value={faq.value} className="bg-[#121212] p-3">
						<AccordionTrigger className="text-md hover:no-underline">What are your shipping options?</AccordionTrigger>
						<AccordionContent className="text-sm text-white/60">
							We offer standard (5-7 days), express (2-3 days), and overnight
							shipping. Free shipping on international orders.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			))}
		</div>
	);
}
