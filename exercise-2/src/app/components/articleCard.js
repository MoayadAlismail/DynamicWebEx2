import Link from 'next/link';
import styles from './articleCard.module.css';
import { formatDateForArticle } from './utils';


export default function ArticleCard({ params }) {
    const formattedDate = formatDateForArticle(params.publishedDate);

    return (
        <Link href={`article/${params.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <img
                    src={params.image.url}
                    alt={params.image.alt}
                    className={styles.image}
                    width={100}
                    height={100}
                    objectFit="cover"
                />
            </div>
            <div className={styles.textContent}>
                <h2 className={styles.title}>{params.title}</h2>
                <p className={styles.excerpt}>{params.blurb}</p>
                <div className={styles.date}>
                    <span> {formattedDate}</span>
                </div>
            </div>
        </Link>
    );
}