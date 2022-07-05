import Button from '@Components/Button';

interface PaginationProps {
  next: string | null;
  previous: string | null;
  onClick: (previousPage?: boolean) => void;
}

const Pagination: React.FC<PaginationProps> = ({ next, previous, onClick }) => {
  return (
    <>
      {previous && <Button onClick={() => onClick(true)}>Previous</Button>}
      {next && <Button onClick={onClick}>Next</Button>}
    </>
  );
};

export default Pagination;
