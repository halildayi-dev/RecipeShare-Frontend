import { useState } from "react";

type Item = {
  id: string;
  value: string;
};

const createItem = (): Item => ({
  id: crypto.randomUUID(),
  value: "",
});

const CreateRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [ingredients, setIngredients] = useState<Item[]>([createItem()]);
  const [steps, setSteps] = useState<Item[]>([createItem()]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isImageValid = 
    imageFile &&
    imageFile.type.startsWith("image/") &&
    imageFile.size < 5 * 1024 * 1024;

  const isValid =
    title.trim() &&
    description.trim() &&
    isImageValid &&
    ingredients.some((i) => i.value.trim()) &&
    steps.some((s) => s.value.trim());

  const updateItem = (
    list: "ingredients" | "steps",
    id: string,
    value: string
  ) => {
    const setter = list === "ingredients" ? setIngredients : setSteps;
    const current = list === "ingredients" ? ingredients : steps;

    setter(
      current.map((item) =>
        item.id === id ? { ...item, value } : item
      )
    );
  };

  const addItem = (list: "ingredients" | "steps") => {
    const setter = list === "ingredients" ? setIngredients : setSteps;
    const current = list === "ingredients" ? ingredients : steps;

    setter([...current, createItem()]);
  }

  const removeItem = (list: "ingredients" | "steps", id: string) => {
    const setter = list === "ingredients" ? setIngredients : setSteps;
    const current = list === "ingredients" ? ingredients : steps;

    setter(current.filter((item) => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const payload = {
      title: title.trim(),
      description: description.trim(),
      imageFile: imageFile,
      ingredients: ingredients
        .map((i) => i.value.trim())
        .filter(Boolean),
      steps: steps.map((s) => s.value.trim()).filter(Boolean),
    };

    console.log(payload);
    // later → call API
    setTimeout(() => {
      setIsSubmitting(false);
    }, 800)
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">

      {/* Title */}
      <div>
        <label className="block font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="resize-none w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      {/* Media URL */}
      <div>
        <label className="block font-medium mb-2">
          Image URL
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
          className="w-full border rounded-xl p-3"
        />
      </div>

      {/* Ingredients */}
      <div>
        <label className="block font-medium mb-2">
          Ingredients
        </label>

        <div className="space-y-3">
          {ingredients.map((item, index) => (
            <div key={item.id} className="flex gap-3">
              <input
                type="text"
                value={item.value}
                onChange={(e) =>
                  updateItem("ingredients", item.id, e.target.value)
                }
                className="flex-1 border rounded-xl p-3"
                placeholder={`Ingredient ${index + 1}`}
              />

              {ingredients.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem("ingredients", item.id)}
                  className="text-sm text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => addItem("ingredients")}
          className="mt-3 text-sm text-orange-600 hover:underline"
        >
          + Add Ingredient
        </button>
      </div>

      {/* Steps */}
      <div>
        <label className="block font-medium mb-3">
          Steps
        </label>

        <div className="space-y-3">
          {steps.map((item, index) => (
            <div key={item.id} className="flex gap-3">
              <textarea
                value={item.value}
                onChange={(e) =>
                  updateItem("steps", item.id, e.target.value)
                }
                rows={3}
                className="resize-none flex-1 border rounded-xl p-3"
                placeholder={`Step ${index + 1}`}
              />

              {steps.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem("steps", item.id)}
                  className="text-sm text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => addItem("steps")}
          className="mt-3 text-sm text-orange-600 hover:underline"
        >
          + Add Step
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className={`w-full py-3 rounded-xl font-medium transition ${isValid && !isSubmitting
            ? "bg-orange-600 text-white font-medium hover:bg-orange-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
      >
        {isSubmitting ? "Publishing..." : "Publish Recipe"}
      </button>
    </form>
  );
};

export default CreateRecipeForm;
