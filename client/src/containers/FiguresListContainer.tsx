import Pagination from '@Components/Pagination';
import FiguresList from '@Components/FiguresList';
import { AllFigures } from '@Interfaces';
import { getAllFigures } from '@Pages/api/parts';
import { useState } from 'react';

interface FiguresListContainerProps {
  initialData: AllFigures;
}

const FiguresListContainer: React.FC<FiguresListContainerProps> = ({
  initialData
}) => {
  const [data, setData] = useState(initialData);

  const getCurrentFigures = async (getNextPage: boolean = true) => {
    const newData = await getAllFigures(getNextPage ? data.next : data.previous)
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });

    return setData(newData);
  };

  return (
    <>
      <FiguresList figures={data.results} />
      <Pagination
        next={data.next}
        previous={data.previous}
        onClick={getCurrentFigures}
      />
    </>
  );
};

export default FiguresListContainer;
