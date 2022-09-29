interface Provider {
  name: string;
  useClass: any;
}

type Constructor<T = any> = new (...args: any[]) => T;

export class Container {
  inject<T>(target: Constructor<T>): T {
    // 获取所有注入的服务
    // When you enable metadata through the "emitDecoratorMetadata" property,
    // the TypeScript compiler will generate the following metadata properties:
    // 'design:type', 'design:paramtypes' and 'design:returntype'.
    const providers = Reflect.getMetadata('design:paramtypes', target); // [OtherService]
    const args = providers.map((provider: Constructor) => new provider());
    return new target(...args);
  }
}
