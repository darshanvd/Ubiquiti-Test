import ErrorBoundary from './components/common/ErrorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LandingPage from './components/LandingPage/LandingPage';
import { lazy, Suspense } from 'react';

const queryClient = new QueryClient()
const ProductDetailsView = lazy(() => import('./components/ProductDetailsView/ProductDetailsView'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorBoundary><div>Error loading page</div></ErrorBoundary>, // Uses ErrorBoundary
    // errorElement: <ErrorPage />,
  },
  {
        path: '/productDetails/:productId',
        element:<Suspense fallback={<p>Loading...</p>}><ProductDetailsView /></Suspense>,
        loader: () => import('./components/ProductDetailsView/ProductDetailsView').then(module => module.default),
      }
]);

const App = () => {
  return <QueryClientProvider client={queryClient}><RouterProvider router={router} /></QueryClientProvider>;
}

export default App
