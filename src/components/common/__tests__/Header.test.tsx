import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the app title with left padding', () => {
    render(<Header />);
    const title = screen.getByText('My App Title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('pl-2');
  });

  it('renders the UnionIcon SVG', () => {
    render(<Header />);
    const svg = screen.getByTestId('union-icon');
    expect(svg.tagName.toLowerCase()).toBe('svg');
  });

  it('renders the user name', () => {
    render(<Header />);
    expect(screen.getByText('Darshan')).toBeInTheDocument();
  });
});
