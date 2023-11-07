import RecipesCard from '@/app/Components/RecipesCard/RecipesCard'
import React from 'react'
import RecipesThingsData from './RecipesThingsData'

export default function RecipesThings() {
  return (
    <div className=' flex flex-wrap gap-10 justify-between px-[5%] py-12 '>
      {RecipesThingsData.map((recipe) => (
        <div className=' w-[22%] ' key={recipe.id}>
          <RecipesCard text={recipe.text} badge={recipe.badge} name={recipe.name} img={recipe.img} like={recipe.like} seen={recipe.seen}/>
        </div>
      ))}
      {/* <RecipesCard /> */}
    </div>
  )
}
