import Link from "next/link";

const footerLinks = [
	{ label: "About", href: "#about" },
	{ label: "Features", href: "#features" },
	{ label: "Reviews", href: "#reviews" },
	{ label: "FAQ", href: "#faq" },
	{ label: "Waitlist", href: "#waitlist" },
];

export default function Footer() {
	return (
		<footer className="relative mt-24 overflow-hidden">
			<div
				className="absolute inset-0 -z-10"
				style={{
					background:
						"radial-gradient(125% 125% at 50% 10%, #000 40%, #1447e6 100%)",
				}}
			/>
			<div className="container section">
				<div className="">
					<div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-2xl">
							<h2 className="font-heading text-[clamp(3.2rem,16vw,11rem)] leading-[0.88] tracking-[-0.05em] text-transparent bg-gradient-to-b from-white via-white/50 to-transparent bg-clip-text">
								EMMPLO
							</h2>
							<p className="mt-4 max-w-[40ch] text-sm sm:text-base text-white/60">
								Designed to help modern teams move faster with less noise and
								more confidence.
							</p>
						</div>

						<nav aria-label="Footer Navigation" className="grid gap-2 sm:gap-3">
							{footerLinks.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									className="font-heading text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white/85 transition hover:text-secondary"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					<div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
						<p>
							(c) {new Date().getFullYear()} Emmplo. Built for high-performing
							teams.
						</p>
						<div className="flex gap-5">
							<Link href="#" className="transition hover:text-white/80">
								Privacy
							</Link>
							<Link href="#" className="transition hover:text-white/80">
								Terms
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
