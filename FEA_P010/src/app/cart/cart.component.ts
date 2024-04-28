import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  products = [
    {
      id: 1,
      name: 'Camiseta',
      imgURL:
        'https://loja.comerciomix.com.br/media/catalog/product/cache/fb4f878514d02efd710032ded901d118/c/a/camiseta-azul-royal-para-sublima_o-tradicional_1.jpg',
      price: 120.8,
      quantity: 0,
    },
    {
      id: 2,
      name: 'Calça',
      imgURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQod_MC2K9JXYkoSe_QQblcyPee57g9FPEdZDbL0LV01g&s',
      price: 139.9,
      quantity: 0,
    },
    {
      id: 3,
      name: 'Sapato',
      imgURL:
        'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/kallucci/media/uploads/produtos/foto/b03134add9abe11200-box-pretto.JPG',
      price: 219.9,
      quantity: 0,
    },
    {
      id: 4,
      name: 'Boné',
      imgURL:
        'https://imgcentauro-a.akamaihd.net/1366x1366/96750112.jpg',
      price: 49.9,
      quantity: 0,
    },
    {
      id: 5,
      name: 'Blusa',
      imgURL: 'https://cdn.awsli.com.br/600x450/1398/1398809/produto/111209958/553b2a55bc.jpg',
      price: 79.9,
      quantity: 0,
    },
    {
      id: 6,
      name: 'Shorts',
      imgURL: 'https://cdn.awsli.com.br/2500x2500/304/304285/produto/116793175/bermuda-linho-masculina-preta01-jrhlwu.jpg',
      price: 129.9,
      quantity: 0,
    },
    {
      id: 7,
      name: 'Casaco',
      imgURL: 'https://http2.mlstatic.com/D_NQ_NP_836523-MLB49427440549_032022-O.webp',
      price: 219.9,
      quantity: 0,
    },
    {
      id: 8,
      name: 'Cueca',
      imgURL: 'https://socd.vteximg.com.br/arquivos/ids/177088-1310-1310/cueca-preta.jpg?v=637152064015600000',
      price: 189.9,
      quantity: 0,
    },
    {
      id: 9,
      name: 'Moletom',
      imgURL: 'https://shoppingcity.com.br/media/catalog/product/cache/51a80c9da94f85ac42b65ba251e9fd91/m/o/moletom_masculino_preto_singleroad_anime.jpg',
      price: 169.9,
      quantity: 0,
    },
  ];

  cart = signal<Item[]>([]);

  addItem(product: any) {
    let productIsAlreadyInCart = this.cart().some(
      (item) => item.id === product.id
    );
    if (!productIsAlreadyInCart) {
      this.cart.update((values) => [...values, { ...product, quantity: 1 }]);
    } else {
      this.cart.set(
        this.cart().map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  }

  removeItem(id: any) {
    this.cart.set(this.cart().filter((item) => item.id !== id));
  }

  precoTotal() {
    return this.cart().reduce(
      (total, prod) => total + prod.price * prod.quantity,
      0
    );
  }
}
