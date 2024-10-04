import data from "@/app/data.json";
import { formatDateForArticle } from '@/app/components/utils';

export default function Article({ params }) {
  const slug = params.slug;
  const articleData = data.find(article => article.id === slug); 
  const formattedDate = formatDateForArticle(articleData.publishedDate);


  return (
    <main className="flex flex-col items-center">
      <div className="relative w-full h-[400px] mb-8">
        <img
          src={articleData.image.url}
          alt={articleData.image.alt}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {articleData.title}
          </h1>
          <p className="text-xl mb-2">{formattedDate}</p>
          <p className="text-lg text-center max-w-2xl">{articleData.blurb}</p>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4">
        {articleData.articleText.map((block, index) => {
          if (block.type === 'p') {
            return <p key={index} className="mb-4 text-lg">{block.data}</p>;
          } else if (block.type === 'h2') {
            return <h2 key={index} className="text-2xl font-bold my-4">{block.data}</h2>;
          } else if (block.type === 'h3') {
            return <h3 key={index} className="text-xl font-bold my-4">{block.data}</h3>;
          }
        })}
      </div>
    </main>
  );
}