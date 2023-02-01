import './styles/style.scss';
import { Fitness } from './pages/fitness';
import { Error } from './pages/error';
import { About } from './pages/about';
import { Foods } from './pages/foods';
import { MyFatSecret } from './pages/myFatSecret';
import { Recipes } from './pages/recipes';
import { $ } from './utils/helpers';

class Server {
  routes = [
    {
      path: '/',
      data: About,
    },
    {
      path: '/fitness',
      data: Fitness,
    },
    {
      path: '/foods',
      data: Foods,
    },
    {
      path: '/recipes',
      data: Recipes,
    },
    {
      path: '/myfatsecret',
      data: MyFatSecret,
    },
    {
      path: '/404',
      data: Error,
    },
  ];

  route = (event: Event) => {
    event.preventDefault();
    const block = event.target as HTMLLinkElement;

    window.history.pushState({}, '', block.href);
    this.handleLocation();
  };

  handleLocation = (href?: string) => {
    const html = href
      ? this.routes.find((route) => route.path === href)
      : this.routes.find((route) => route.path === window.location.pathname) || this.routes[4];

    const blockForContent = <HTMLElement>$('.content');

    const page = html?.data as typeof Fitness | typeof Foods | typeof Recipes | typeof MyFatSecret;

    const cl = new page(blockForContent);
    cl.render();

    window.addEventListener('popstate', () => this.handleLocation());
    window.addEventListener('DOMContentLoaded', () => this.handleLocation());
  };

  eventListeners() {
    const pagesBlock = <HTMLElement>document.querySelector('.nav__menu');

    pagesBlock.addEventListener('click', (e) => {
      this.route(e);
    });
  }
}

const server = new Server();
server.handleLocation();
server.eventListeners();
export default server;
