import { useParams, Navigate } from "react-router-dom";
import { AppHeader } from "@/components/layout";
import {
  RecipeMedia,
  RecipeHeader,
  RecipeActions,
  RecipeContent,
  RecipeComments,
} from "@/components/recipe";
import { mockRecipeDetails } from "@/services/mocks/recipeDetails";

const RecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const recipe = mockRecipeDetails.find(
    (item) => item.id === id
  );

  if (!recipe) {
    return <Navigate to="/home" replace />
  }

  return (
    <>
      <AppHeader />
      <main className="bg-gray-50 min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <RecipeMedia
            imageUrl={recipe.imageUrl}
            title={recipe.title}
          />

          <RecipeHeader {...recipe} />

          <RecipeActions />

          <RecipeContent
            description={recipe.description}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
          />

          <RecipeComments recipeId={recipe.id} />
        </div>
      </main>
    </>
  );
};

export default RecipeDetailPage;
