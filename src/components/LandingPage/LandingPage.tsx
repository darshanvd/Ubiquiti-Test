import { useReducer, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProductsData } from 'src/util/http';
import type { UseQueryResult } from '@tanstack/react-query';
import type { DevicesResponse } from 'src/util/http';
import ControlPanel from './ControlPanel/ControlPanel';
import { appReducer, AppStateContext, initialState } from 'src/context/AppStateContext';
import Layout from './Layout/Layout';
import MainLayout from 'src/components/common/MainLayout';
import ErrorBoundary from 'src/components/common/ErrorBoundary';

const LandingPage = () => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const { searchValue, selectedFilters } = state;
    const { data }: UseQueryResult<DevicesResponse, Error> = useQuery<DevicesResponse, Error>({
        queryKey: ['products'],
        queryFn: () => fetchProductsData(),
    });
    const { devices } = data || { devices: [] };

    const filteredDevices = useMemo(() =>
        devices.filter((d) => {
            const matchesSearch = searchValue === "" || d.product.name.toLowerCase().includes(searchValue.toLowerCase());
            const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(d.line.id);
            return matchesSearch && matchesFilter;
        }) || [],
        [devices, searchValue, selectedFilters]
    );

    const toolbar = <ControlPanel
        devices={devices}
        devicesCount={filteredDevices.length || 0}
    />;

    return (
        <ErrorBoundary>
            <AppStateContext value={{ state, dispatch }}>
                <MainLayout toolbar={toolbar}>
                    <Layout filteredDevices={filteredDevices || []} />
                </MainLayout>
            </AppStateContext>
        </ErrorBoundary>
    );
}

export default LandingPage
