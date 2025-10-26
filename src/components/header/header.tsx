"use client";

import Link from "next/link";
import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";

// Components
import Theme from "../global/theme/theme";
import { MobileMainNav } from "./mobile-main-nav";
import { Nav } from "./nav";

// Hooks
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

// Icons
import { Home, Activity } from "lucide-react";

// Interfaces
import { IRoute } from "@/interfaces/core/IRoute";

import Scroll from "@/components/global/Scroll";

export default function Header() {
	// const {state} = useAuth();
	const locale = useLocale();
	const pathname = usePathname();
	const isMobile = useIsMobile();

	const t = useTranslations("Header");

	const routes: Array<IRoute> = [
		{
			href: `/`,
			label: t("home"),
			icon: <Home />,
			active: pathname === "/" || pathname === "/en" || pathname === "/pt",
		},
	];

	return (
		<div className="sticky w-full h-full py-4 top-0 left-0 flex items-center justify-between px-4 z-20 bg-secondary md:px-40">
			<aside>
				<Link href="/" className="flex items-center gap-2">
					<h1>Logo</h1>
				</Link>
			</aside>

			<div className="flex items-center justify-center space-x-4">
				{isMobile ? (
					<MobileMainNav className="md:hidden" routes={routes} />
				) : (
					<Nav className="hidden md:flex" routes={routes} />
				)}

				<Theme />
			</div>

			<Scroll />
		</div>
	);
}
