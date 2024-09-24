import Link from 'next/link';
import styles from './articleCard.module.css';

export default function ArticleCard({ param }) {
    return (
        <Link href={`article/${param.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <img
                    src={param.image.url}
                    alt={param.image.title}
                    width={100}
                    height={100}
                    objectFit="cover"
                    className={styles.image}
                />
            </div>
            <div className={styles.textContent}>
                <h2 className={styles.title}>{param.title}</h2>
                <p className={styles.excerpt}>{param.blurb}</p>
                <div className={styles.date}>
                    <span> {param.publishedDate}</span>
                </div>
            </div>
        </Link>
    );
}