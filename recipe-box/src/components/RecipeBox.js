import RecipeCard from "./RecipeCard";
import Search from "./Search";
import Sort from "./Sort"

function RecipeBox({ recipes, handleSearchQuery, updateSort }) {

    const renderRecipeCard = recipes.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
    })

    return (
        <div>
            <div id='sort'>
                <Search handleSearchQuery={handleSearchQuery} />
                <br />
                <Sort updateSort={updateSort} />
            </div>
            <div >
                <div id="box" className="ui three column grid three wide">
                    {renderRecipeCard}
                </div>
            </div>
        </div>
    )
}
export default RecipeBox;