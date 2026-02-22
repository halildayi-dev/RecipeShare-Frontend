import { SimpleHeader } from "@/components/layout";
import { CreateRecipeForm } from "@/components/recipe";

const CreateRecipePage = () => {
  return (
    <>
      <SimpleHeader />
      <main className="min-h-screen bg-gray-50 py-10">
        <section className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">
              Create New Recipe
            </h1>
            <p className="text-gray-600 text-sm">
              Share your favorite dish with the community.
            </p>

            <CreateRecipeForm />
          </div>
        </section>
      </main>
    </>
  );
};

export default CreateRecipePage;
