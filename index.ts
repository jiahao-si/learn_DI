// 必须导入，要不 Property 'getMetadata' does not exist on type 'typeof Reflect
import 'reflect-metadata';

import { Container } from './container';
import { Injectable } from './inject';

class DepClass {
  name: string = 'jiahao.si';

  sayName() {
    console.log(this.name);
    return this.name;
  }
}

@Injectable()
class Demo {
  constructor(
    public dep: DepClass // useClass 的方式添加的 provider
  ) {}

  callDepMethod() {
    return this.dep.sayName();
  }
}

const container = new Container();

const inst = container.inject(Demo);

console.log('DemoInstance:', inst.callDepMethod());
