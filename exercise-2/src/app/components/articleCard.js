import Link from 'next/link';
import styles from './articleCard.module.css';
import { formatDateForArticle } from './utils';


export default function ArticleCard({ param }) {
    const freshDate = new Date(param.publishedDate); //format the date
    // const formattedDate = `${freshDate.getMonth() + 1}/${freshDate.getDate()}/${freshDate.getFullYear()}`; 
    const formattedDate = formatDateForArticle(param.publishedDate);

    return (
        <Link href={`article/${param.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <img
                    src={param.image.url}
                    alt={param.image.alt}
                    className={styles.image}
                    width={100}
                    height={100}
                    objectFit="cover"
                />
            </div>
            <div className={styles.textContent}>
                <h2 className={styles.title}>{param.title}</h2>
                <p className={styles.excerpt}>{param.blurb}</p>
                <div className={styles.date}>
                    <span> {formattedDate}</span>
                </div>
            </div>
        </Link>
    );
}