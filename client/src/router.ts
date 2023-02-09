import './styles/style.scss';
import { Fitness } from './pages/fitness';
import { Error } from './pages/error';
import { About } from './pages/about';
import { Foods } from './pages/foods';
import { MyFatSecret } from './pages/myFatSecret';
import { Recipes } from './pages/recipes';
import { SignIn } from './pages/signIn';
import { LogUp } from './pages/logUp';
import { $, activePage } from './utils/helpers';

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
      path: '/signup',
      data: SignIn,
    },
    {
      path: '/login',
      data: LogUp,
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
      : this.routes.find((route) => route.path === window.location.pathname) || this.routes[7];

    if (html) activePage(html.path);

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

    const burgerMenu = <HTMLElement>document.querySelector('.header_burger');
    const headerMenu = <HTMLElement>document.querySelector('.nav__menu');
    const mainOpen = <HTMLElement>document.querySelector('.main-open');
    const burgerClose = <HTMLElement>document.querySelector('.nav_menu_close');
    burgerMenu.addEventListener('click', () => {
      headerMenu.classList.add('header-nav-active');
      mainOpen.classList.add('main_open_menu');
    });
    burgerClose.addEventListener('click', () => {
      headerMenu.classList.remove('header-nav-active');
      mainOpen.classList.remove('main_open_menu');
    });
    mainOpen.addEventListener('click', () => {
      headerMenu.classList.remove('header-nav-active');
      mainOpen.classList.remove('main_open_menu');
    });
  }
}

const server = new Server();
server.handleLocation();
server.eventListeners();
export default server;
