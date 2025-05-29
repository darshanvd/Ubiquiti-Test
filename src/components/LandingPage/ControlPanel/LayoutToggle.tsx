import React, { use } from 'react';
import { AppStateContext } from 'src/context/AppStateContext';
import GridIcon from 'src/assets/GridIcon';
import ListIcon from 'src/assets/ListIcon';

const LayoutToggle: React.FC = () => {
  const appCtx = use(AppStateContext);
  const state = appCtx?.state;
  const dispatch = appCtx?.dispatch || (() => { });
  const view = state?.view || '';
  return (
    <>
      <button
        type="button"
        className={`p-1 rounded hover:bg-grey-hover-icon focus:outline-none focus:ring-2 focus:ring-primary ${view === 'list' ? 'bg-grey-select-bg-icon text-primary' : 'text-grey-icon'}`}
        title="List View"
        onClick={() => dispatch({ type: 'SET_VIEW', value: 'list' })}
      >
        <ListIcon active={view === 'list'} className="w-4 h-4" />
      </button>
      <button
        type="button"
        className={`p-1 rounded hover:bg-grey-hover-icon focus:outline-none focus:ring-2 focus:ring-primary ${view === 'grid' ? 'bg-grey-select-bg-icon text-primary' : 'text-grey-icon'}`}
        title="Grid View"
        onClick={() => dispatch({ type: 'SET_VIEW', value: 'grid' })}
      >
        <GridIcon active={view === 'grid'} className="w-4 h-4" />
      </button>
    </>
  )
};

export default LayoutToggle;
