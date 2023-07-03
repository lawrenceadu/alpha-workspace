import { Dispatch, SetStateAction } from 'react';
import BasePaginate, { ReactPaginateProps } from 'react-paginate';
import { ChevronLeft, ChevronRight } from 'react-feather';
import styled from 'styled-components';

export interface PaginateProps extends ReactPaginateProps {
  to?: number;
  page: number;
  from?: number;
  total?: number;
  perPage?: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export function Paginate({
  to,
  from,
  total,
  setPage,
  page = 0,
  perPage = 0,
  ...props
}: PaginateProps) {
  return (
    <Wrapper>
      {to && from && total && (
        <p className="mb-0 text-muted fw-semibold">
          {from} - {to} of {total}
        </p>
      )}
      <BasePaginate
        initialPage={page}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        onPageChange={({ selected }) => setPage(selected)}
        nextLabel={
          <>
            <span>Next</span>
            <ChevronRight />
          </>
        }
        previousLabel={
          <>
            <ChevronLeft />
            <span>Previous</span>
          </>
        }
        {...props}
      />
    </Wrapper>
  );
}

/**
 * styles
 */
const Wrapper = styled.div`
  gap: 0.75rem;
  display: flex;
  overflow-x: auto;
  align-items: center;

  ul {
    padding: 0rem;
    display: flex;
    list-style: none;
    margin-bottom: 0rem;

    & > *:not(:last-child) {
      margin-right: 0.25rem;
    }

    & > *:first-child {
      margin-right: 1rem;
    }

    & > *:last-child {
      margin-left: 0.75rem;
    }

    li {
      a {
        border: solid 2px var(--color-gray-200);
        transition: ease-in-out all 0.15s;
        justify-content: center;
        border-radius: 0.25rem;
        color: #000 !important;
        align-items: center;
        user-select: none;
        min-width: 2.5rem;
        padding: 0 0.5rem;
        height: 2.5rem;
        display: flex;
        outline: none;
      }

      &.next,
      &.previous {
        a {
          padding: 0.5rem 1rem;
          gap: 0.5rem;
        }

        &.disabled {
          a {
            color: var(--color-neutral-500) !important;
          }
        }
      }

      &.selected {
        a {
          color: #fff !important;
          transition: ease all 0.25s;
          border-color: var(--color-primary);
          background-color: var(--color-primary);
        }
      }
    }
  }
`;

export default Paginate;
