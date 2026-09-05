export default function SearchBar({SearchTerm, SetSearchTerm}) {

  return (
    <>
      <input
        type="text"
        placeholder="Search properties..."
        className="search-bar"
        value={SearchTerm}
        onChange={(e)=> SetSearchTerm(e.target.value)}/>
    </>
  );
}
