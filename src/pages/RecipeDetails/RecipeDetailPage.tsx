import { AppHeader } from "@/components/layout";
import {
  RecipeMedia,
  RecipeHeader,
  RecipeActions,
  RecipeContent,
  RecipeComments,
} from "@/components/recipe";
import  { mockRecipeDetails }  from "@/services/mocks/recipeDetails";

const RecipeDetailPage = () => {
  const recipe = mockRecipeDetails;

  return (
    <>
      <AppHeader />
      <main className="max-w-4xl mx-auto px-6 py-8">
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
        <RecipeComments />
      </main>
    </>
  );
};

export default RecipeDetailPage;
