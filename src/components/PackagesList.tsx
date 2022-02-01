import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";

const PackagesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");

  const { searchPackages } = useActions();
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPackages(term);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {!error &&
        !loading &&
        data.map((name, index) => <div key={index}>{name}</div>)}
    </div>
  );
};
export default PackagesList;
