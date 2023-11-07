import React from 'react'
import RecipesArticlesData from './RelatedArticlesData'
import RecipesCard from '@/app/Components/RecipesCard/RecipesCard'

export default function RelatedArticles() {
  return (
    <div className=' px-[5%] py-10 '>
      <h1 className=' font-semibold text-[2.7rem] text-center font-montserrat py-4 '>Related Articles</h1>
      <section className=' flex flex-wrap justify-between'>
        {RecipesArticlesData.map((article) => (
           <div className=' w-[22%] ' key={article.id}>
           <RecipesCard text={article.text} badge={article.badge} name={article.name} img={article.img} like={article.like} seen={article.seen}/>
         </div>
        ))}
      </section>
    </div>
  )
}
