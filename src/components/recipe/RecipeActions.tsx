import { useState } from "react";

interface RecipeActionsProps {
  recipeId: string;
  initialLikes: number;
  initialIsLiked: boolean;
  initialIsSaved: boolean;
}

const RecipeActions = () => {
  const [likesCount, setLikesCount] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {

  }

  const handleSave = async () => {

  }

  return (
    <div className="flex items-center gap-6 mt-4">
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition
          ${isLiked
            ? "bg-orange-100 text-orange-600"
            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
      >
        ❤️ {likesCount}
      </button>
      <button 
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition
          ${isLiked
            ? "bg-orange-100 text-orange-600"
            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
      >
        🔖 {isSaved ? "Saved" : "Save"}
      </button>
    </div>
  );
};

export default RecipeActions;
