import { IFly } from "./interfaces";

class AirPlane implements IFly {
  fly(): void {
    console.log('Flying an airplane');
  }

}

export default AirPlane;