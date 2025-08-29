import type { LegoComponent } from '@/types/lego';
const footer: LegoComponent = {
  id: 'cmp_footer_simple',
  name: 'Footer Simple',
  kind: 'footer',
  purpose: 'Pie con enlaces y copy',
  tags: ['footer','layout'],
  jsCompat: ['vanilla'],
  defaultVariantId: 'v1',
  variants: [{ id:'v1', name:'Básico', html:`<footer class="footer p-10 bg-base-200 text-base-content">
  <nav>
    <h6 class="footer-title">Servicios</h6>
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Diseño</a>
  </nav>
  <nav>
    <h6 class="footer-title">Compañía</h6>
    <a class="link link-hover">Acerca</a>
    <a class="link link-hover">Contacto</a>
  </nav>
</footer>` }],
};
export default footer;
