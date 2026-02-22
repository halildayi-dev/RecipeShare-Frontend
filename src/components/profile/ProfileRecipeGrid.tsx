import { RecipeCard } from "@/components/recipe";
import { mockRecipes } from "@/services/mocks/recipes";
import { mockUser } from "@/services/mocks/user";

const ProfileRecipeGrid = () => {
  const userRecipes = mockRecipes.filter(
    (recipe) => recipe.authorId === mockUser.id
  );

  return (
    <section className="mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">My Recipes</h2>

        <span className="text-sm text-gray-500">
          {userRecipes.length} total
        </span>
      </div>

      {/* Grid */}
      {userRecipes.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {userRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              imageUrl={recipe.imageUrl}
              authorName={recipe.authorName}
              authorAvatarUrl={recipe.authorAvatarUrl}
              createdAt={recipe.createdAt}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <p className="text-gray-500 mb-4">
            You haven't shared any recipes yet.
          </p>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700 transition">
            Create your first recipe
          </button>
        </div>
      )}
    </section>
  );
};

export default ProfileRecipeGrid;
