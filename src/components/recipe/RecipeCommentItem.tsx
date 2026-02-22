interface RecipeCommentItemProps {
  userName: string;
  userAvatarUrl: string;
  createdAt: string;
  text: string;
}

const RecipeCommentItem = ({
  userName,
  userAvatarUrl,
  createdAt,
  text,
}: RecipeCommentItemProps) => {
  return (
    <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
      <img
        src={userAvatarUrl}
        alt={userName}
        className="w-9 h-9 rounded-full object-cover shrink-0"
      />

      <div className="flex-1">
        <div className="flex items-center gap-3 text-sm">
          <span className="font-medium text-gray-900">{userName}</span>
          <span className="text-gray-400 text-xs">{createdAt}</span>
        </div>

        <p className="text-gray-700 mt-2 leading-relaxed text-sm">{text}</p>

        <div className="flex gap-6 mt-3 text-sm text-gray-500">
          <button className="hover:text-gray-700 transition">👍 Like</button>
          <button className="hover:text-gray-700 transition">👎 Dislike</button>
          <button className="hover:text-gray-700 transition">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCommentItem;
