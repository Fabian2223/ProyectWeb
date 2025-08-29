import type { LegoComponent } from '@/types/lego';
const navbar: LegoComponent = {
  id: 'cmp_navbar_basic',
  name: 'Navbar Básica',
  kind: 'navbar',
  purpose: 'Navegación superior con marca y links',
  tags: ['layout','navbar'],
  jsCompat: ['vanilla'],
  defaultVariantId: 'v1',
  variants: [{
    id:'v1', name:'Responsive',
    html:`<div class="navbar bg-base-200">
  <div class="flex-1"><a class="btn btn-ghost text-xl">LEGO</a></div>
  <div class="flex-none hidden md:block">
    <ul class="menu menu-horizontal px-1">
      <li><a>Inicio</a></li>
      <li><a>Biblioteca</a></li>
      <li><a>Prompts</a></li>
    </ul>
  </div>
</div>`
  }],
};
export default navbar;
