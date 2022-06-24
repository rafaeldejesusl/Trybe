import { IDrive } from "./interfaces";

class Car implements IDrive {
  drive(): void {
    console.log('Drive a futuristic car');
  }

}

export default Car;