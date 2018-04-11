// NOTE: micro requires it to be the default export. I think...
import microCors from 'micro-cors';
import { service } from './service';

const cors = microCors({ allowMethods: ['PUT', 'POST'] });

export default cors(service);
