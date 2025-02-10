type Comparable = string | number;

export enum PaymentMethod {
  Online = "online",
  Cash = "cash",
}

export interface Product<T extends Comparable> {
  id(): T;
  category(): string;
  name(): string;
  description(): string;
  coverURL(): string;
  price(): number;
}

export interface Order<T extends Comparable> {
  id(): T;
  products(): Catalog<Product<T>>;
  deliveryAddress(): string;
  paymentMethod(): PaymentMethod;
  email(): string;
  number(): string;
  totalPrice(): number;
}

export interface Catalog<T extends Product<Comparable>> {
  add(...products: T[]): void;
  remove(...products: T[]): void;
  clear(): void;
  totalPrice(): number;
}

export interface DataSource<T extends Comparable> {
  getProduct(id: T): Promise<Product<T>>;
  getCatalog(): Promise<Catalog<Product<T>>>;
  postOrder(order: Order<T>): Promise<Order<T>>;
}
