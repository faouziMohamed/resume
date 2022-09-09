/* eslint-disable @typescript-eslint/require-await */
import { render } from '@testing-library/react';

import devData from '@/data/dev-data.json';

import IntroSection from '@/components/home/IntroSection';
import Layout from '@/components/layout/Layout';

import HomePage from '@/pages/userAvatar';
import { connectionToGithub } from '@/utils/utils';

describe('Index Page', () => {
  it('renders The Layout', async () => {
    const { container } = render(
      <Layout>
        <p>Hello world</p>
      </Layout>,
    );
    expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });

  test('render the intro section showing a png with next/image', async () => {
    const { container } = render(<IntroSection data={devData} />);
    expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });

  test('render the home page', async () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });
});

describe.only('Fetch Repository data from the Github API', () => {
  test("Connection to github REST API using octokit's client", async () => {
    jest.setTimeout(30000);
    const githubUsername = 'faouzimohamed';
    expect(process.env.GITHUB_TOKEN).toBeTruthy();
    // @ts-expect-error: process.env.GITHUB_TOKEN is be undefined
    const connected = await connectionToGithub(process.env.GITHUB_TOKEN);
    expect(connected.owner?.toLowerCase()).toBe(githubUsername.toLowerCase());
  });
});
