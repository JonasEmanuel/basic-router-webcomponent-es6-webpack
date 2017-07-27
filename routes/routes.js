import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';

const routes = [{
        name: 'Page 1',
        path: '/',
        component: Page1
    },
    {
        name: 'Page 2',
        path: '/page2',
        component: Page2
    },
    {
        name: 'Page 3',
        path: '/page3',
        component: Page3
    }
];

module.exports = routes;