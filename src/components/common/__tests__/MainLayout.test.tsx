import { render, screen } from '@testing-library/react';
import MainLayout from '../MainLayout';

describe('MainLayout', () => {
  it('renders the Header component', () => {
    render(<MainLayout toolbar={<div>Toolbar</div>}>Content</MainLayout>);
    expect(screen.getByText('My App Title')).toBeInTheDocument();
  });

  it('renders the toolbar', () => {
    render(<MainLayout toolbar={<div data-testid="toolbar">Toolbar</div>}>Content</MainLayout>);
    expect(screen.getByTestId('toolbar')).toBeInTheDocument();
    expect(screen.getByTestId('toolbar')).toHaveTextContent('Toolbar');
  });

  it('renders children content', () => {
    render(<MainLayout toolbar={<div>Toolbar</div>}><div data-testid="main-content">Main Content</div></MainLayout>);
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
    expect(screen.getByTestId('main-content')).toHaveTextContent('Main Content');
  });
});
