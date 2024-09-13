interface ClassScrollProps {
  el: Node | string;
  forwards?: boolean | undefined;
  className: string;
  delay?: number | undefined;
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

declare function ClassScrollProps(targets: ClassScrollProps[]): void;

export default ClassScrollProps;
