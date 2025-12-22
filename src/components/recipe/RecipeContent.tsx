interface Props {
  description: string;
  ingredients: string[];
  steps: string[];
}

const RecipeContent = ({ description, ingredients, steps }: Props) => {
  return (
    <div className="mt-8 space-y-6">
      <p className="text-gray-700">{description}</p>

      <div>
        <h3 className="font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside text-gray-700">
          {ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Steps</h3>
        <ol className="list-decimal list-inside text-gray-700">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeContent;
