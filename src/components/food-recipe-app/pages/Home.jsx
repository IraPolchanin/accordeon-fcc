import React from 'react'
import { useRecipeData } from '../GlobalContext'
import RecipeItem from '../components/RecipeItem'

const Home = () => {
  const { recipeList, loading } = useRecipeData();

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length
        ? recipeList.map(item => <RecipeItem key={item.recipe_id} item={item} />)
        : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing to show. Please search something
            </p>
          </div>
        )}
    </div>
  )
}

export default Home