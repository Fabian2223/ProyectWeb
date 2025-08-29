export interface LegoVariant {
  id: string;
  name: string;
  html: string;
  cssNotes?: string;
  js?: string;
  responsiveNotes?: string;
  accessibility?: string;
  screenshotUrl?: string;
}
export type JsCompat = 'vanilla' | 'alpine' | 'vue' | 'react';
export type ComponentKind = 'hero' | 'card' | 'navbar' | 'footer' | 'form' | 'table' | 'modal' | 'grid' | 'chart' | 'misc';

export interface LegoComponent {
  id: string;
  name: string;
  kind: ComponentKind;
  purpose: string;
  tags: string[];
  jsCompat: JsCompat[];
  defaultVariantId: string;
  variants: LegoVariant[];
  tailwindNotes?: string;
  playgroundTemplate?: string;
}
