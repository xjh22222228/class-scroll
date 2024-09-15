interface ClassScrollProps {
  el: Element | string;
  className: string;
  delay?: number | undefined;
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];

  // callback
  onVisible?(entries: IntersectionObserverEntry[]): void;
  onHidden?(entries: IntersectionObserverEntry[]): void;
}

declare class ClassScroll {
  constructor(targets: ClassScrollProps[]);

  init();
  destroy();
  disconnect();
}

export default ClassScroll;
