interface Props {
  title: string;
  authorName: string;
  authorAvatarUrl?: string;
  createdAt: string;
}

const RecipeHeader = ({
  title,
  authorName,
  authorAvatarUrl,
  createdAt,
}: Props) => {
  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            {authorAvatarUrl && (
              <img
                src={authorAvatarUrl}
                alt={authorName}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <span>{authorName}</span>
        </div>

        <span>{createdAt}</span>
      </div>
    </div>
  );
};

export default RecipeHeader;
