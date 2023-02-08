import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('renders occasion label', () => {
  render(<BookingForm />);
  const occasioanLable = screen.getByLabelText(/Occasion/);
  expect(occasioanLable).toBeInTheDocument();
});
