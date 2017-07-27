export default class Component {
    constructor() {
        this._template;
        this._data;
        this.xhr = new XMLHttpRequest();
    }

    set template(template) {
        this._template = template;
    }

    set data(data) {
        this._data = data;
    }

    get template() {
        return this._template;
    }

    get data() {
        return this._data;
    }

    onCreate() {

    }

    onUpdate() {

    }

    update(data) {
        let finalData = Object.assign(this._data, data);
        this.getTemplate()
            .then((template) => window.elementRoot.innerHTML = this.mountTemplate(template, finalData))
            .catch((templateError) => window.elementRoot.innerHTML = templateError);

        this.onUpdate();
    }

    mount() {
        this.getTemplate()
            .then((template) => {
                window.elementRoot.innerHTML = this.mountTemplate(template);
                this.onCreate();
            })
            .catch((templateError) => window.elementRoot.innerHTML = templateError);
    }

    unmount() {
        window.elementRoot.innerHTML = "";
    }

    mountTemplate(template, data = this.data) {
        Object.keys(data).forEach((propName) => template = template.replace(new RegExp(`{{${propName}}}`, 'g'), data[propName]));
        return template;
    }

    getTemplate() {
        let htmlTemplate, templatePath = `../views/${this.constructor.name.toLowerCase()}.html`;
        return new Promise((resolve, reject) => {
            this.xhr.open("GET", templatePath, false);
            this.xhr.onreadystatechange = () => (this.xhr.readyState === 4 && this.xhr.status === 200) ? resolve(this.xhr.responseText) : reject(`<h1>${templatePath} not found</h1>`);
            this.xhr.send();
        });

    }

}