import cron from 'node-cron';
import { updateQuantity } from '../job/updatequantity.job.js'

cron.schedule('1 * * * *', updateQuantity);

export { cron }