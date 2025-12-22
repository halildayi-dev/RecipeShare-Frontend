interface Props {
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
}: Props) => {
  return (
    <div className="flex gap-3">
      <img
        src={userAvatarUrl}
        alt={userName}
        className="w-9 h-9 rounded-full object-cover"
      />

      <div className="flex-1">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">{userName}</span>
          <span className="text-gray-400">{createdAt}</span>
        </div>

        <p className="text-gray-700 mt-1">{text}</p>

        <div className="flex gap-4 mt-2 text-sm text-gray-500">
          <button className="hover:text-gray-700">👍 Like</button>
          <button className="hover:text-gray-700">👎 Dislike</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCommentItem;
