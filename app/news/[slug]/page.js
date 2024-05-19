import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsDetailsPage({ params }) {
	const newsItem = DUMMY_NEWS.find((item) => item.slug === params.slug);

	return (
		<article className='news-article'>
			<header>
				<img src={`/images/news/${newsItem.image}`} alt='' />
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>{newsItem.content}</p>
		</article>
	);
}
