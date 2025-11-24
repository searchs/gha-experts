import { describe, it, expect, beforeEach, vi } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the main heading', () => {
        render(<App />);
        const heading = screen.getByText(/Transit API in PeopleLand/i);
        expect(heading).toBeInTheDocument();
    });

    it('renders the count button with initial value of 0', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /count is 0/i });
        expect(button).toBeInTheDocument();
    });

    it('increments count when button is clicked', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /count is 0/i });

        fireEvent.click(button);

        const updatedButton = screen.getByRole('button', { name: /count is 1/i });
        expect(updatedButton).toBeInTheDocument();
    });

    it('increments count multiple times on multiple clicks', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /count is 0/i });

        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);

        const updatedButton = screen.getByRole('button', { name: /count is 3/i });
        expect(updatedButton).toBeInTheDocument();
    });

    it('renders the instruction text', () => {
        render(<App />);
        const instruction = screen.getByText(/Click on the Count to increase number/i);
        expect(instruction).toBeInTheDocument();
    });

    it('button has correct styling attributes', () => {
        render(<App />);
        const button = screen.getByRole('button');

        expect(button).toHaveStyle({
            fontWeight: '600',
            color: 'rgb(255, 0, 0)',
        });
    });

    it('heading has correct styling attributes', () => {
        render(<App />);
        const heading = screen.getByText(/Transit API in PeopleLand/i);

        expect(heading).toHaveStyle({
            fontSize: '3.5rem',
            fontWeight: '200',
        });
    });
});
