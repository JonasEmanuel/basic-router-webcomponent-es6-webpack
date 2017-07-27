import Component from '../api/component';
export default class Page1 extends Component {
    constructor() {
        super();
        super.data = {
            name: "Page 1",
            message: "This is a first page"
        };
    }
}