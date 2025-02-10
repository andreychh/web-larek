import { Catalog, DataSource, Order, PaymentMethod, Product } from "../domain";

enum HTTPMethod {
  Get = "GET",
  Post = "Post",
}

export class HTTPProduct implements Product<string> {
  id(): string {
    throw new Error("Method not implemented.");
  }

  category(): string {
    throw new Error("Method not implemented.");
  }

  name(): string {
    throw new Error("Method not implemented.");
  }

  description(): string {
    throw new Error("Method not implemented.");
  }

  coverURL(): string {
    throw new Error("Method not implemented.");
  }

  price(): number {
    throw new Error("Method not implemented.");
  }
}

export class HTTPOrder implements Order<string> {
  id(): string {
    throw new Error("Method not implemented.");
  }

  products(): Catalog<Product<string>> {
    throw new Error("Method not implemented.");
  }

  deliveryAddress(): string {
    throw new Error("Method not implemented.");
  }

  paymentMethod(): PaymentMethod {
    throw new Error("Method not implemented.");
  }

  email(): string {
    throw new Error("Method not implemented.");
  }

  number(): string {
    throw new Error("Method not implemented.");
  }

  totalPrice(): number {
    throw new Error("Method not implemented.");
  }
}

export class HTTPCatalog implements Catalog<HTTPProduct> {
  add(...products: HTTPProduct[]): void {
    throw new Error("Method not implemented.");
  }

  remove(...products: HTTPProduct[]): void {
    throw new Error("Method not implemented.");
  }

  clear(): void {
    throw new Error("Method not implemented.");
  }

  totalPrice(): number {
    throw new Error("Method not implemented.");
  }
}

export class HTTPDataSource implements DataSource<string> {
  private baseUrl: string;

  private sendRequest<T>(uri: string, method: HTTPMethod, body?: object): Promise<T> {
    throw new Error("Method not implemented.");
  }

  private handleResponse<T>(response: Response): Promise<T> {
    throw new Error("Method not implemented.");
  }

  getProduct(id: string): Promise<HTTPProduct> {
    throw new Error("Method not implemented.");
  }

  getCatalog(): Promise<HTTPCatalog> {
    throw new Error("Method not implemented.");
  }

  postOrder(order: HTTPOrder): Promise<HTTPOrder> {
    throw new Error("Method not implemented.");
  }
}
