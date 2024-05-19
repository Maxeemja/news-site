'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
	const path = usePathname();

	return (
		<Link href={href} className={path.includes(href) ? 'active' : undefined}>
			{children}
		</Link>
	);
}
