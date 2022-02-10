import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {


    homepage = true; 
    products = false;
    news = false; 

    handleClick(e){
        switch(e.detail){
            case "shopButton":
                this.homepage = false; 
                this.products = true;
                this.news = false;
            break;
            case "newsButton":
                this.homepage = false; 
                this.products = false;
                this.news = true;
            break;
        }
    }

    handleHome(){
        this.homepage = true; 
        this.products = false; 
        this.news = false;
    }

    handleProducts(){
        this.homepage = false; 
        this.products = true; 
        this.news = false;
    }

    handleNews(){
        this.homepage = false; 
        this.products = false; 
        this.news = true;
    }

}