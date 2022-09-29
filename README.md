# learn_DI

A simple implementation of Nest.js IOC & DI;

nest.js 控制反转（IOC）和 依赖注入（ DI） 的简单实现

## how to implement

- 结合 ts 和装饰器为类添加元数据，元数据即代表依赖的对象
- 传入 ioc 容器，ioc 容器获取元数据，并通过元数据生成依赖对象，再注入当前类生成实例

## refelect-metadata

ts 中默认采用 Reflect-metadata 库为类添加元数据；

Reflect Metadata 是 ES7 的一个提案，它主要用来在声明的时候添加和读取元数据。TypeScript 在 1.5+ 的版本已经支持它，你只需要：

```js
npm i reflect-metadata --save。
在 tsconfig.json 里配置 emitDecoratorMetadata 选项。
```

```js
Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);

Reflect.getMetadata(metadataKey, target, propertyKey);

// 生成添加元数据的装饰器
Reflect.metadata(metadataKey, metadataValue);
```
