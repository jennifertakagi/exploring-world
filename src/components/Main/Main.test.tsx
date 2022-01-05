import { render, screen } from '@testing-library/react';

import Main from './Main';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /advanced react/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
