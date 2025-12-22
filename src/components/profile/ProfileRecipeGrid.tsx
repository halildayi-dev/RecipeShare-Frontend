import { RecipeCard } from "@/components/recipe";
import { mockRecipes } from "@/services/mocks/recipes";

const ProfileRecipeGrid = () => {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-6">Recipes</h2>

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

export default ProfileRecipeGrid;
