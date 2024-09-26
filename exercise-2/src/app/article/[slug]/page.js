import data from "/Users/moayadalismail/Desktop/DynamicWebEx2/exercise-2/src/app/data.json";


export default function Article(param) {
  const slug = param.slug;
  
  const articleData = data.find(article => article.slug === slug);

  return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="articlePageHeaderWrapper">
            <h1 className="text-4xl font-bold"> {articleData.title} </h1>
            <p>{articleData.publishedDate}</p>
            <p>{articleData.blurb}</p>
          </div>
          <p>{articleData.blurb}</p>
          <div>
            {articleData?.articleText?.map((text, i) =>  <p key={i}>{text.data}</p>)}
          </div>
        
        </main>
    );
}