export default class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentPath = window.location.pathname;
        this.allNavigateButtons = document.querySelectorAll('[to]');
        this.allIconsOfButtons = document.querySelectorAll('.icon-menu');

        this.allNavigateButtons.forEach((element) => {
            element.addEventListener('click', (event) => {
                if (event.toElement.localName == "a") {
                    this.navigate(event.toElement.attributes['to'].value);
                }
            });
        });

        this.allIconsOfButtons.forEach((element) => element.addEventListener('click', (event) => {
            this.navigate(event.toElement.parentElement.attributes['to'].value);
        }));

        window.onpopstate = () => this.init();
    }

    go(index) {
        window.history.go(index);
    }

    navigate(url) {
        this.allNavigateButtons.forEach((element) => {
            if (element.attributes[0].value === url) {
                element.parentNode.className = "active";
            } else {
                element.parentNode.className = "";
            }
        });

        if (this.routes.filter((route) => route.path === url) == 0) {
            this.otherwise();
        } else {
            this.routes.filter((route) => {
                if (url === route.path) {
                    let componentInstance = new route.component();
                    componentInstance.mount();
                }
            });
            this.push(url);
        }

    }

    init() {
        this.navigate(this.currentPath);
    }

    push(url) {
        window.history.pushState(null, null, url);
    }

    replace(url) {
        window.history.replaceState(null, null, url);
    }

    otherwise() {
        this.push('/not-found');
        window.elementRoot.innerHTML = "<h1>Page not found - 404</h1>";
    }
}