import React from "react";
import { Button } from "./ui/button";

export default function CTA() {
	return (
		<section id="waitlist" className="relative section container">
			<div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-8 lg:py-12 lg:px-9">
				{/* Teal Glow Background */}
				<div
					className="absolute mx-6 lg:mx-9 inset-0 -z-10"
					style={{
						backgroundImage: `
        radial-gradient(125% 145% at 80% 0%, #121212 40%, #1447e6 100%)
      `,
						backgroundSize: "100% 100%",
					}}
				/>
				<div>
					<h1 className="heading-secondary mb-4">Ready to get started?</h1>
					<p>
						Start your free trial today. Let’s make simplicity your advantage.
					</p>
				</div>

				<Button className="mt-12 lg:mt-0 w-fit" variant="secondary">Get Started</Button>
			</div>
		</section>
	);
}
