/// <reference types="astro/astro-jsx" />

type MyAttributes = astroHTML.JSX.ImgHTMLAttributes;

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    xyz?: number;
  }
}
