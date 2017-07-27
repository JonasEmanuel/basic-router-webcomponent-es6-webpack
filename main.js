import Router from './api/router';
import routes from './routes/routes';
import './styles/style.less';
import 'font-awesome/css/font-awesome.min.css';

window.elementRoot = document.getElementById("app");

var router = new Router(routes);

router.init();
