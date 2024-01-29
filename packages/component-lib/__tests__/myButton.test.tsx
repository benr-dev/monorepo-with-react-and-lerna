import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { MyButton } from '../lib/myButton';

test("Example 1 renders successfully", () => {
    render(<MyButton/>);

    const element = screen.getByText(/I'm a button/i);

    expect(element).toBeInTheDocument();
})