import { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState([]);
  const [favoritesList, setFavoritesList] = useState([])
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchParam}`)
      const data = await res.json();
      if (data?.recipes) {
        setRecipeList(data.recipes)
        setSearchParam('')
        navigate('/');
      }
    } catch (error) {
      console.log(error)
      setSearchParam("");
    } finally {
      setLoading(false)
    }
  }

  const handleAddToFavorite = (currentItem) => {
    const copyFavoritesList = [...favoritesList];
    const index = copyFavoritesList.findIndex(item => item.recipe_id
      === currentItem.recipe_id);
    if (index === -1) {
      copyFavoritesList.push(currentItem)
    } else {
      copyFavoritesList.splice(index, 1)
    }
    setFavoritesList(copyFavoritesList);
  }

  return (
    <GlobalContext.Provider value={{
      searchParam,
      loading,
      recipeList,
      setSearchParam,
      handleSubmit,
      recipeDetailsData,
      setRecipeDetailsData,
      handleAddToFavorite,
      favoritesList
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useRecipeData = () => useContext(GlobalContext)