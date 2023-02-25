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
import { User } from './pages/user';
import { headerUser } from './components/headerUser';
import { $, activePage, getMainPath } from './utils/helpers';
import { SingleRecipe } from './pages/singleRecipe';
import { Community } from './pages/community';
import { allExerciseArray } from './components/dataFitExercise';

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
      path: '/user',
      data: User,
    },
    {
      path: '/community',
      data: Community,
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
    const searchInput = <HTMLInputElement>$('.search__input');
    //const dataListExercise = document.getElementById('search-header-fitness');
    let searchValueDefault = 'food';
    searchSelect.onchange = function () {
      if (searchSelect.value === 'food') {
        searchValueDefault = 'food';
        const dataListExercise = document.getElementById('search-header-fitness');
        if (dataListExercise) dataListExercise.remove();
      }
      if (searchSelect.value === 'recipe') {
        searchValueDefault = 'recipe';
        const dataListExercise = document.getElementById('search-header-fitness');
        if (dataListExercise) dataListExercise.remove();
      }
      if (searchSelect.value === 'exercise') {
        searchValueDefault = 'exercise';
        const createDataListExercise = document.createElement('datalist');
        createDataListExercise.id = 'search-header-fitness';
        createDataListExercise.innerHTML = `${allExerciseArray.map((e) => `<option value="${e.name}">`).join('')}`;
        searchInput.after(createDataListExercise);
      }
    };

    searchInput.addEventListener('change', async () => {
      if (searchValueDefault === 'food') {
        window.location.href = `/foods/product/${searchInput.value}`;
      }
      if (searchValueDefault === 'recipe') {
        window.location.href = `/recipes/${searchInput.value}`;
      }
      if (searchValueDefault === 'exercise') {
        window.location.href = `/fitness?exercise=${searchInput.value}`;
      }
    });
  }
}

const router = new Router();
router.handleLocation();
router.eventListeners();
headerUser.render();
export default router;
