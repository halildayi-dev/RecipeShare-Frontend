import RecipeCommentItem from "./RecipeCommentItem";
import { mockComments } from "@/services/mocks/comments";

const RecipeComments = () => {
  return (
    <div className="mt-12">
      <h3 className="font-semibold mb-4">Comments</h3>

      {/* Add comment */}
      <div className="flex gap-3 mb-6">
        <div className="w-9 h-9 rounded-full bg-gray-300" />
        <div className="flex-1">
          <textarea
            placeholder="Add a comment..."
            className="w-full border rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={3}
          />
          <button
            disabled
            className="mt-2 px-4 py-2 text-sm rounded-lg bg-orange-600 text-white opacity-50 cursor-not-allowed"
          >
            Post
          </button>
        </div>
      </div>

      {/* Comment list (scrollable) */}
      <div className="space-y-6 max-h-80 overflow-y-auto pr-2">
        {mockComments.map((comment) => (
          <RecipeCommentItem
            key={comment.id}
            userName={comment.userName}
            userAvatarUrl={comment.userAvatarUrl}
            createdAt={comment.createdAt}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeComments;
