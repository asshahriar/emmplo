import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
	return (
		<div className=" flex flex-col flex-1 items-center justify-center dark:bg-black">
			<Badge>Get Started</Badge>
		</div>
	);
}