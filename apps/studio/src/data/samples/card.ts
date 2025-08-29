import type { LegoComponent } from '@/types/lego';
const card: LegoComponent = {
  id: 'cmp_card_product',
  name: 'Card de Producto',
  kind: 'card',
  purpose: 'Mostrar un producto con precio y CTA',
  tags: ['ecommerce','card','product'],
  jsCompat: ['vanilla'],
  defaultVariantId: 'v1',
  variants: [{
    id:'v1', name:'Básica',
    html:`<article class="card bg-base-200 w-full max-w-sm">
  <figure><img src="https://picsum.photos/seed/prod/800/600" alt="Producto"/></figure>
  <div class="card-body">
    <h3 class="card-title">Producto X</h3>
    <p class="opacity-80">Descripción breve del producto.</p>
    <div class="card-actions justify-between items-center">
      <span class="text-2xl font-bold">$1299</span>
      <button class="btn btn-primary">Comprar</button>
    </div>
  </div>
</article>`,
    screenshotUrl:'https://picsum.photos/seed/lego-card/800/400'
  }],
};
export default card;
