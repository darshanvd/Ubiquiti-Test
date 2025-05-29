import React, { use } from 'react';
import type { ProductDetails } from 'src/types/ProductDetailsType';
import ListView from './ListView/ListView';
import GridView from './GridView/GridView';
import { AppStateContext } from 'src/context/AppStateContext';

interface LayoutProps {
    filteredDevices: ProductDetails[];
}

const Layout: React.FC<LayoutProps> = ({ filteredDevices }) => {
    const appCtx = use(AppStateContext);
    const state = appCtx?.state;
    const { view } = state;
    return (
        <>
            {filteredDevices && (
                <>
                    {view === 'list' ? (
                        <ListView devices={filteredDevices} />
                    ) : (
                        <GridView devices={filteredDevices} />
                    )}
                </>
            )}
        </>
    );
};

export default Layout;