import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home.jsx';
import { AuthProvider } from '../../contexts/AuthContext.jsx';

describe('Home page', () => {
  it('renders headline and enter button', () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </AuthProvider>
    );
    expect(screen.getByRole('heading', { name: /savage nation usa/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enter here/i })).toBeInTheDocument();
  });
});
