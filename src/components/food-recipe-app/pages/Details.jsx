import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeData } from '../GlobalContext';

const Details = () => {
  const { recipeDetailsData, setRecipeDetailsData, handleAddToFavorite, favoritesList } = useRecipeData();
  const { id } = useParams();
  const isInFavorites = favoritesList && favoritesList.length > 0 && favoritesList.some(item => item.recipe_id === recipeDetailsData.recipe_id);

  const getRecipeDetails = async () => {
    try {
      const url = `https://forkify-api.herokuapp.com/api/get?rId=${id}`
      const resp = await fetch(url)
      const data = await resp.json()
      setRecipeDetailsData(data.recipe)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRecipeDetails()
  }, [id])

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData.title}
        </h3>
        <div>
          <button
            className="py-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
            onClick={() => handleAddToFavorite(recipeDetailsData)}
          >
            {isInFavorites ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>

        <div>
          <span className="leading-10 text-2xl font-semibold text-black">Ingredients:</span>
          <ul className="mt-5 flex flex-col gap-3">
            {recipeDetailsData?.ingredients?.map((ingredient, index) => (
              <li key={index}>
                <span className="text-m text-black">
                  {ingredient}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details