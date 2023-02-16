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
import { $, activePage, getMainPath } from './utils/helpers';
import { SingleRecipe } from './pages/singleRecipe';
import api from './api/api';

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
      path: '/recipe',
      data: SingleRecipe,
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
    const mainPath = getMainPath(window.location.pathname);

    const html = href
      ? this.routes.find((route) => route.path === href)
      : this.routes.find((route) => route.path === mainPath) || this.routes[this.routes.length - 1];

    if (html) activePage(html.path);

    const blockForContent = <HTMLElement>$('.content');

    const page = html?.data as
      | typeof Fitness
      | typeof Foods
      | typeof Recipes
      | typeof MyFatSecret
      | typeof FoodsCategory;

    const cl = new page(blockForContent);
    cl.render();
  };

  eventListeners() {
    const pagesBlock = <HTMLElement>document.querySelector('.nav__menu');

    window.addEventListener('popstate', () => this.handleLocation());
    // window.addEventListener('DOMContentLoaded', () => this.handleLocation());

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

    const searchSelect = <HTMLSelectElement>document.getElementById('search-select');
    let searchValueDefault = 'food';
    searchSelect.onchange = function () {
      if (searchSelect.value === 'food') {
        searchValueDefault = 'food';
      }
      if (searchSelect.value === 'recipe') {
        searchValueDefault = 'recipe';
      }
      if (searchSelect.value === 'exercise') {
        searchValueDefault = 'exercise';
      }
    };

    const searchInput = <HTMLInputElement>$('.search__input');
    searchInput.addEventListener('change', async () => {
      //if (searchValueDefault === 'food') {
      //}
      if (searchValueDefault === 'recipe') {
        console.log(await api.getRecipeFoodSearch(searchInput.value));
        window.location.pathname = `/recipes/${searchInput.value}`;
      }
      //if (searchValueDefault === 'exercise') {
      //}
    });
  }
}

const router = new Router();
router.handleLocation();
router.eventListeners();
export default router;
