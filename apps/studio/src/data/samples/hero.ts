import type { LegoComponent } from '@/types/lego';

const hero: LegoComponent = {
  id: 'cmp_hero_split',
  name: 'Hero Split',
  kind: 'hero',
  purpose: 'Hero para landing con imagen y CTA',
  tags: ['landing','hero','split','marketing'],
  jsCompat: ['vanilla','alpine'],
  defaultVariantId: 'v1',
  variants: [{
    id:'v1', name:'Imagen derecha',
    html:`<section class="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
  <div>
    <h1 class="text-4xl font-bold tracking-tight">{{title}}</h1>
    <p class="mt-4 text-lg opacity-80">{{subtitle}}</p>
    <div class="mt-6 flex gap-3">
      <a class="btn btn-primary">{{primary_cta}}</a>
      <a class="btn btn-outline">{{secondary_cta}}</a>
    </div>
  </div>
  <img src="{{image_url}}" alt="Mockup" class="rounded-xl shadow"/>
</section>`,
    screenshotUrl:'https://picsum.photos/seed/lego-hero/800/400'
  }],
  tailwindNotes: 'Grid md, gap, botones DaisyUI',
  playgroundTemplate: '<div class="min-h-screen">__CONTENT__</div>',
};
export default hero;
