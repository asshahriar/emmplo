import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-900 font-sans dark:bg-black">
			<Button size="lg" variant="outline">
				Get Started
			</Button>
			<h1 className="font-sans text-white text-6xl">Hello World</h1>
		</div>
	);
}
