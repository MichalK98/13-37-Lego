import Pagination from '@Components/Pagination';
import PartsList from '@Components/PartsList';
import { AllParts } from '@Interfaces';
import { getAllParts } from '@Pages/api/parts';
import { useState } from 'react';

interface PartsListContainerProps {
  initialData: AllParts;
}

const PartsListContainer: React.FC<PartsListContainerProps> = ({
  initialData
}) => {
  const [data, setData] = useState(initialData);

  const getCurrentParts = async (getNextPage: boolean = true) => {
    const newData = await getAllParts(getNextPage ? data.next : data.previous)
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });

    return setData(newData);
  };

  return (
    <>
      <PartsList parts={data.results} />
      <Pagination
        next={data.next}
        previous={data.previous}
        onClick={getCurrentParts}
      />
    </>
  );
};

export default PartsListContainer;
