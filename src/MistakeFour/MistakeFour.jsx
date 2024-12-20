export const MistakeFour = ({ title }) => {
  const displayedTitle = title.length > 75 ? `${title.slice(0, 75)}...` : title;

  return (
    <div className="mistakeWrapper">
      <h1>{displayedTitle}</h1>
    </div>
  );
};
