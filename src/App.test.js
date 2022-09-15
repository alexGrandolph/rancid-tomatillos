import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
 render(<App />);
})

// it("renders Header", () => {
//   const wrapper = shallow(<App />);
//   const title = "Rancid Tomatillos 🍅"
//   expect(wrapper.contains(title)).toEqual(true)
// })