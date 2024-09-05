import React from 'react'
import { useRecipeData } from '../GlobalContext'
import RecipeItem from '../components/RecipeItem'

const Favorites = () => {
  const { favoritesList } = useRecipeData()
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length
        ? (favoritesList.map(item => <RecipeItem key={item.recipe_id} item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing is added in favorites.
            </p>
          </div>
        )

      }

    </div>
  )
}

export default Favorites