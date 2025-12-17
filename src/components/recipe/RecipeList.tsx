import { mockRecipes } from "@/services/mocks/recipes";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      
      {/* Section title */}
      <h2 className="text-2xl font-bold mb-6">
        Latest Recipes
      </h2>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mockRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            imageUrl={recipe.imageUrl}
            authorName={recipe.authorName}
            authorAvatarUrl={recipe.authorAvatarUrl}
            createdAt={recipe.createdAt}
          />
        ))}
      </div>
    </section>
  );
};

export default RecipeList;
