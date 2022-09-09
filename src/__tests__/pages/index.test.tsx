/* eslint-disable @typescript-eslint/require-await */
import { render } from '@testing-library/react';

import HomePage from '@/components/home/userAvatar';
import Layout from '@/components/layout/Layout';

describe('Index Page', () => {
  it('renders The Layout', async () => {
    const { container } = render(
      <Layout>
        <p>Hello world</p>
      </Layout>,
    );
    expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });

  test('render the home page', async () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });
});
