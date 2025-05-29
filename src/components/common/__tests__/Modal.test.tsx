import { render, screen } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal', () => {
  it('renders children when open', () => {
    render(
      <Modal title={'Modal Title'} open={true} onClose={() => {}}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );
    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
  });

  it('does not render children when closed', () => {
    render(
      <Modal title={'Modal Title'} open={false} onClose={() => {}}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );
    expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument();
  });
});
