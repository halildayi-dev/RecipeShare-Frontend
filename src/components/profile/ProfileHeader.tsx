interface Props {
  avatarUrl: string;
  fullName: string;
  username: string;
  bio: string;
  recipeCount: number;
  memberSince: string;
}

const ProfileHeader = ({
  avatarUrl,
  fullName,
  username,
  bio,
  recipeCount,
  memberSince,
}: Props) => {
  return (
    <div className="flex items-center gap-6">
      <img
        src={avatarUrl}
        alt={fullName}
        className="w-24 h-24 rounded-full object-cover"
      />

      <div>
        <h1 className="text-2xl font-bold">{fullName}</h1>
        <p className="text-gray-500">@{username}</p>

        <p className="mt-3 text-gray-700 max-w-md">{bio}</p>

        <div className="flex gap-6 mt-4 text-sm text-gray-600">
          <span>
            <strong>{recipeCount}</strong> recipes
          </span>
          <span>Member since {memberSince}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
