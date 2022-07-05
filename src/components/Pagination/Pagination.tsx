import Button from '@Components/Button';
import { Flex } from '@Components/elements';

interface PaginationProps {
  next: string | null;
  previous: string | null;
  onClick: (previousPage?: boolean) => void;
}

const Pagination: React.FC<PaginationProps> = ({ next, previous, onClick }) => {
  return (
    <Flex>
      {previous ? (
        <Button onClick={() => onClick(false)}>Previous</Button>
      ) : (
        <Button disabled={true}>Previous</Button>
      )}
      {next ? (
        <Button onClick={() => onClick()}>Next</Button>
      ) : (
        <Button disabled={true}>Next</Button>
      )}
    </Flex>
  );
};

export default Pagination;
