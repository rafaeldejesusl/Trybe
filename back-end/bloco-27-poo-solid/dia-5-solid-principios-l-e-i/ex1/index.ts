// ./index.ts
import CepService from './CepService';
import FooCepAPI from './FooCepAPI';

async function main() {
  const cepAPI = new FooCepAPI()
  const cepSvc = new CepService(cepAPI);

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();