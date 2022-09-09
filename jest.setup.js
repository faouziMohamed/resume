import '@testing-library/jest-dom/extend-expect';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next image stub'; // whatever
  },
}));

/** Mock Seo's useRouter */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));
