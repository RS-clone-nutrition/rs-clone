import './styles/style.scss';
import { Fitness } from './pages/fitness';
import { Error } from './pages/error';
import { About } from './pages/about';
import { Foods } from './pages/foods';
import { MyFatSecret } from './pages/myFatSecret';
import { Recipes } from './pages/recipes';
import { SignIn } from './pages/signIn';
import { LogUp } from './pages/logUp';
import { FoodsCategory } from './pages/foodsCategory';
import { SingleFood } from './pages/singleFood';
import { $, getMainPath } from './utils/helpers';

class Router {
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
      path: '/foods/group',
      data: FoodsCategory,
    },
    {
      path: '/foods/product',
      data: SingleFood,
    },
    {
      path: '/404',
      data: Error,
    },
  ];

  route = (event: Event, href?: string) => {
    event.preventDefault();
    const block = event.target as HTMLLinkElement;
    href = href || block.href;

    window.history.pushState({}, '', href);
    this.handleLocation();
  };

  handleLocation = (href?: string) => {
    console.log('br');
    const mainPath = getMainPath(window.location.pathname);

    const html = href
      ? this.routes.find((route) => route.path === href)
      : this.routes.find((route) => route.path === mainPath) || this.routes[4];

    const blockForContent = <HTMLElement>$('.content');

    const page = html?.data as
      | typeof Fitness
      | typeof Foods
      | typeof Recipes
      | typeof MyFatSecret
      | typeof FoodsCategory;

    const cl = new page(blockForContent);
    cl.render();

    window.addEventListener('popstate', () => this.handleLocation());
  };

  eventListeners() {
    const pagesBlock = <HTMLElement>document.querySelector('.nav__menu');

    pagesBlock.addEventListener('click', (e) => {
      this.route(e);
    });
  }
}

const router = new Router();
router.handleLocation();
router.eventListeners();
export default router;
