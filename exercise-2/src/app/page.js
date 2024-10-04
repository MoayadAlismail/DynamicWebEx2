import ArticleCard from './components/articleCard';
import articles from './data.json';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-black">Daily News</h1>
        
        <div className="space-y-6">
          {articles.map((article) => (
            <ArticleCard 
              key={article.id} 
              params={article}
            />
          ))}
        </div>
      </div>
    </main>
  );
}