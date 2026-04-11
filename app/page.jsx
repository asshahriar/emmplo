import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<div className=" flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
			<h1 className="text-white heading-primary">Lorem ipsum dolor sit.</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
				ratione dolore? Magnam in corrupti repellendus nulla quisquam eum
				debitis neque quae dolores ea?
			</p>
			<Button size="lg">Get Started</Button>

      <hr />

      <h1 className="heading-secondary">
        Lorem ipsum dolor sit amet consectetur.
      </h1>

      <h1 className="subtitle">Lorem, ipsum dolor.</h1>
		</div>
	);
}
