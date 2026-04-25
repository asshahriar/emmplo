import React from "react";
import { Badge } from "./ui/badge";
import FAQItems from "./faqitems";

export default function FAQ() {
	return (
		<section id="faq" className="section container flex flex-col md:flex-row gap-2 justify-between">
			<div>
				<Badge>Frequently Asked Questions</Badge>
				<h1 className="heading-secondary max-w-[20ch] mt-4">Everything you want to know</h1>
			</div>
			<FAQItems/>
		</section>
	);
}
