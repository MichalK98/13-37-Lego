import Pagination from '@Components/Pagination';
import SetsList from '@Components/SetsList';
import { AllSets } from '@Interfaces';
import { getAllSets } from '@Pages/api/parts';
import { useState } from 'react';

interface SetsListContainerProps {
  initialData: AllSets;
}

const SetsListContainer: React.FC<SetsListContainerProps> = ({
  initialData
}) => {
  const [data, setData] = useState(initialData);

  const getCurrentSets = async (getNextPage: boolean = true) => {
    const newData = await getAllSets(getNextPage ? data.next : data.previous)
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });

    return setData(newData);
  };

  return (
    <>
      <SetsList sets={data.results} />
      <Pagination
        next={data.next}
        previous={data.previous}
        onClick={getCurrentSets}
      />
    </>
  );
};

export default SetsListContainer;
