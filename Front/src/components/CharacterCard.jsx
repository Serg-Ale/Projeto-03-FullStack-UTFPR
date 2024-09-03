const CharacterCard = ({ character }) => {
  // Define a cor baseada no status
  const getStatusColor = (status) => {
    switch (status) {
      case "Alive":
        return "text-green-500";
      case "Dead":
        return "text-red-500";
      case "Unknown":
        return "text-yellow-500";
    }
  };

  return (
    <div
      key={character._id}
      className="mb-2 flex flex-col justify-start rounded border-4 border-neutral-200 p-4 text-2xl"
    >
      <h3 className="text-4xl font-bold">{character.name}</h3>
      <p className={getStatusColor(character.status)}>
        Status: {character.status}
      </p>
      <p>Total Episodes: {character.totalEpisodes}</p>
      <p>Type: {character.type}</p>
    </div>
  );
};

export default CharacterCard;
