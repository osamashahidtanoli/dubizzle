import { render, screen, fireEvent } from "@testing-library/react"
import Search from "../Search"
import { Provider } from "react-redux";
import store from "../../store";

describe('Search', () => {
  it('When Submit it should search for users', () => {
    render(<Provider store={store}><Search /></Provider>);
    const inputElement = screen.getByPlaceholderText('Search Gists for the username');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {target: {value: 'ABC'}})
    expect(inputElement.value).toBe('ABC');
  })
})