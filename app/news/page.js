import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';

export default function NewsPage() {
	return (
		<>
			<h2>News Page</h2>
			<ul className='news-list'>
				{DUMMY_NEWS.map((item) => (
					<li key={item.id}>
						<Link href={`news/${item.slug}`}>
							<img src={`/images/news/${item.image}`} alt={item.title} />
							<span>{item.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
