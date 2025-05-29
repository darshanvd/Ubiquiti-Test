import { render, screen } from '@testing-library/react';
import GridView from '../GridView';
import { MemoryRouter } from 'react-router-dom';
import type { ProductDetails } from 'src/types/ProductDetailsType';

const mockProducts: ProductDetails[] = [
  {
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
  },
  {
    guids: ['g2'],
    icon: { id: 'icon2', resolutions: [[25, 25]] },
    id: '2',
    images: { default: 'test.svg', nopadding: '', topology: '' },
    line: { id: 'l2', name: 'Line 2' },
    product: { abbrev: 'P2', name: 'Product 2' },
    shortnames: ['short2'],
    sku: 'sku2',
    sysid: 'sysid2',
    sysids: ['sysid2'],
    triplets: [],
    uisp: { bleServices: {}, firmware: { board: [], platform: '' }, line: '', nameLegacy: [] },
    videos: {},
  },
];

describe('GridView', () => {
  it('renders a grid of products', () => {
    render(
      <MemoryRouter>
        <GridView devices={mockProducts} />
      </MemoryRouter>
    );
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('renders product lines', () => {
    render(
      <MemoryRouter>
        <GridView devices={mockProducts} />
      </MemoryRouter>
    );
    expect(screen.getByText('Line 1')).toBeInTheDocument();
    expect(screen.getByText('Line 2')).toBeInTheDocument();
  });
});
