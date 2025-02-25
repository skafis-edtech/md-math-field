import { SvelteComponent } from "svelte";
declare module "md-math-field/svelte" {
  export interface ButtonProps {
    text?: string;
    onClick?: () => void;
  }

  export default class Button extends SvelteComponent {
    $$prop_def: ButtonProps;
  }
}
