type TPath = { title: string; url: string };

class PathsApp {
  paths: TPath[];

  constructor(paths: TPath[]) {
    this.paths = paths;
  }

  getPath(title: string): string {
    return this.paths.find((path) => path.title == title)?.url || '/';
  }
}

const paths = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'ShopNow',
    url: '/shopNow',
  },
  {
    title: 'Sign',
    url: '/signUp',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

export const pathsApp = new PathsApp(paths);
