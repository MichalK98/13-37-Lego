import Pagination from '@Components/Pagination';
import PartsList from '@Components/PartsList';
import TopBar from '@Components/TopBar';
import { Data, Profile } from '@Interfaces';
import { getAllParts } from '@Pages/api/parts';
import { useState } from 'react';

interface PartsListContainerProps {
  initialData: Data;
  profile: Profile;
}

const PartsListContainer: React.FC<PartsListContainerProps> = ({
  initialData,
  profile
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
      <TopBar profile={profile} />
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
