import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../../store";
import GistUserIcons from "../GistUserIcons";

describe('Search', () => {
  it('should show 2 Comments text', () => {
    render(<Provider store={store}><GistUserIcons comments={2} files={2} /></Provider>);
    expect(screen.getByText('2 Comments')).toBeInTheDocument();
  })
})