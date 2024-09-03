import {Component, OnInit, Renderer2} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductsType} from "./types/products.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {AdvantageService} from "./services/advantage.service";
import {HotToastService} from "@ngneat/hot-toast";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  public headerPhone: string = '375293689868';
  public instagramLink: string = 'https://www.instagram.com/';
  public showPresent: boolean = true;
  public advantages: AdvantageType[] = [];
  public products: ProductsType[] = [];
  public openMenu = false;



  constructor(
              private productService: ProductService,
              public cartService: CartService,
              private advantageService: AdvantageService,
              private toast: HotToastService,
              private renderer: Renderer2
    ) {
  }


  ngOnInit() {
    this.advantages = this.advantageService.getAdvantage();
    this.products = this.productService.getProducts();


  }

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

  public bodyOverflow(){
    return this.renderer.setStyle(document.body, 'overflow', this.openMenu ? 'hidden' : 'auto');
  }

  public toggleOpen(){
    this.openMenu = !this.openMenu;
    this.bodyOverflow()
  }
  public closeMenu(){
    this.openMenu = false;
    this.bodyOverflow()
  }
  public scrollTo(target: HTMLElement): void{
    this.openMenu = this.openMenu ? !this.openMenu : this.openMenu;
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCard(product: ProductsType, target: HTMLElement): void{
    this.scrollTo(target);
    this.toast.success(product.title + ' 1 шт добавлен в корзину!', { duration: 2000 });
    // alert(product.title + ' добавлен в корзину!')

    this.formValues.productTitle = product.title.toUpperCase();

    this.cartService.count++;
    this.cartService.amount+=product.price;

  }

  public createOrder() {
    if(!this.formValues.productTitle) {
      this.toast.error('Выберите макарун', { duration: 2000 });
      return;
    }
    if(!this.formValues.name) {
      this.toast.error('Заполните Ваше имя', { duration: 2000 });
      return;
    }
    if(!this.formValues.phone) {
      this.toast.error('Заполните телефон', { duration: 2000 });
      return;
    }
    this.toast.success('Спасибо за заказ!', { duration: 2000 })


    this.formValues = {
      productTitle: '',
      name: '',
      phone: '',
    }
  }

}
