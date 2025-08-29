import type { LegoComponent } from '@/types/lego';
const form: LegoComponent = {
  id: 'cmp_form_contact',
  name: 'Formulario de Contacto',
  kind: 'form',
  purpose: 'Capturar nombre, email y mensaje',
  tags: ['form','contact'],
  jsCompat: ['vanilla'],
  defaultVariantId: 'v1',
  variants: [{ id:'v1', name:'Simple', html:`<form class="space-y-3 max-w-md">
  <input class="input input-bordered w-full" placeholder="Nombre"/>
  <input class="input input-bordered w-full" type="email" placeholder="Email"/>
  <textarea class="textarea textarea-bordered w-full" placeholder="Mensaje"></textarea>
  <button class="btn btn-primary">Enviar</button>
</form>` }],
};
export default form;
