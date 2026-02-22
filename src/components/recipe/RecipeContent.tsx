interface Props {
  description: string;
  ingredients: string[];
  steps: string[];
}

const RecipeContent = ({ description, ingredients, steps }: Props) => {
  return (
    <section className="mt-10 space-y-10">

      {/* Description */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">About this recipe</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Ingredients */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Ingredients</h3>

        <ul className="space-y-2">
          {ingredients.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="flex items-start gap-3 text-gray-700"
            >
              <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Steps */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Instructions</h2>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li
              key={`${step}-${index}`}
              className="flex gap-4"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-sm font-medium shrink-0">
                {index + 1}
              </span>
              <p className="text-gray-700 leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default RecipeContent;
