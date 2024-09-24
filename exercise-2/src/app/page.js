import styles from "./page.module.css";
import data from "./data.json";
import ArticleCard from "./components/articleCard";

export default function Home() {
  return (
    <main className={styles.pageWrapper}>
      <h1 className={styles.title}>Article Listing</h1>
      <div className={styles.articleGrid}>
        {data.map((article) => (
          <ArticleCard param={article} />
        ))}
      </div>
    </main>
  );
}