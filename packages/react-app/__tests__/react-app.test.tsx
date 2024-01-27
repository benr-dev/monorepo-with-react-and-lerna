import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App';

test("Example 1 renders successfully", () => {
    render(<App/>);

    const element = screen.getByText(/Welcome to my app/i);

    expect(element).toBeInTheDocument();
})