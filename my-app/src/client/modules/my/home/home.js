import { LightningElement, api } from 'lwc';

export default class TitleBar extends LightningElement {

handleChange(e){
this.dispatchEvent(new CustomEvent('imageclick', {detail:e.target.title}));
console.log(e.target.title);
}

}
