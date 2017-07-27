import Component from '../api/component';
export default class Page2 extends Component {
    constructor() {
        super();
        super.data = {
            name: "Page 2",
            message: "Click in button for update component"
        };
    }

    /* @override */
    onCreate() {
        document.getElementById("btnUpdate").addEventListener('click', () => this.update());
    }

    /* @override */
    onUpdate() {
        console.log("Component updated!");
    }

    update(){
        super.update({ name: "Page 2 updated!" })
    }

}