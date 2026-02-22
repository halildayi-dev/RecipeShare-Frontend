import { useState } from "react";
import RecipeCommentItem from "./RecipeCommentItem";
import { mockComments } from "@/services/mocks/comments";

interface RecipeCommentsProps {
  recipeId: string;
}

const RecipeComments = ({ recipeId }: RecipeCommentsProps) => {
  const [commentText, setCommentText] = useState("");

  const comments = mockComments.filter(
    (comment) => comment.recipeId === recipeId
  );

  const isDisabled = commentText.trim().length === 0;

  return (
    <section className="mt-12 bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-semibold mb-6 text-lg">
        Comments ({comments.length})
      </h3>

      {/* Add comment */}
      <div className="flex gap-3 mb-8">
        <div className="w-9 h-9 rounded-full bg-gray-300 shrink-0" />

        <div className="flex-1">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full border rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            rows={3}
          />

          <div className="flex justify-end mt-3">
          <button
            disabled={isDisabled}
            className={`px-4 py-2 text-sm rounded-lg font-medium transition ${
              isDisabled
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              :  "bg-orange-600 text-white hover:bg-orange-700"
            }`}
          >
            Post
          </button>
        </div>
        </div>
      </div>

      {/* Comment list (scrollable) */}
      <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
        {comments.map((comment) => (
          <RecipeCommentItem
            key={comment.id}
            userName={comment.userName}
            userAvatarUrl={comment.userAvatarUrl}
            createdAt={comment.createdAt}
            text={comment.text}
          />
        ))}
      </div>
    </section>
  );
};

export default RecipeComments;
