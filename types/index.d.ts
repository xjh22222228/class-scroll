interface ClassScrollProps {
  el: Element | string;
  forwards?: boolean | undefined;
  className: string;
  delay?: number | undefined;
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

declare class ClassScroll {
  constructor(targets: ClassScrollProps[]);

  init();
  destroy();
  disconnect();
}

export default ClassScroll;
