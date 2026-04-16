import AnimatedLogoCloud from "@/components/animatedlogocloud";
import Benefits from "@/components/benefits";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<main className="">
			<Hero/>
			<Features/>
			<Benefits/>
			<Testimonials/>
    </main>
	);
}