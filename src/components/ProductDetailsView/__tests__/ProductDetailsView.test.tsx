import { render, screen } from '@testing-library/react';
import ProductDetailsView from '../ProductDetailsView';
import { vi } from 'vitest';
import type { ProductDetails } from 'src/types/ProductDetailsType';
import { MemoryRouter } from 'react-router-dom';

const mockProduct: ProductDetails = {
  guids: ['g1'],
  icon: { id: 'icon1', resolutions: [[25, 25]] },
  id: '1',
  images: { default: 'test.svg', nopadding: '', topology: '' },
  line: { id: 'l1', name: 'Line 1' },
  product: { abbrev: 'P1', name: 'Product 1' },
  shortnames: ['short1'],
  sku: 'sku1',
  sysid: 'sysid1',
  sysids: ['sysid1'],
  triplets: [],
  uisp: { bleServices: {}, firmware: { board: [], platform: '' }, line: '', nameLegacy: [] },
  videos: {},
};

vi.mock('react-router-dom', (importOriginal) => {
  return (importOriginal() as Promise<Record<string, unknown>>).then((actual) => ({
    ...actual,
    useLocation: () => ({ state: { productDetails: mockProduct } }),
    useNavigate: () => vi.fn(),
    MemoryRouter: actual.MemoryRouter, // re-export MemoryRouter for the test
  }));
});

describe('ProductDetailsView', () => {
  it('renders product details', () => {
    render(
      <MemoryRouter>
        <ProductDetailsView />
      </MemoryRouter>
    );
    expect(screen.getByText('sku1')).toBeInTheDocument();
  });
});
