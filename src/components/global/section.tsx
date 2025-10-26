import { cn } from "@/lib/utils";

interface SectionProps {
	children: React.ReactNode;
	className?: string;
}

export function Section({ children, className }: SectionProps) {
	return <section className={cn("h-[80vh] md:h-[90vh] p-4 md:px-40", className)}>{children}</section>;
}