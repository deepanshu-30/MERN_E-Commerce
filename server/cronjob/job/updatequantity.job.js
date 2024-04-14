import { Product } from "../../model/product.model.js";
import fs from 'fs';
import csv from "csvtojson";
import path from 'path';

const updateQuantity = async () => {
    try {
        const __filename = new URL(import.meta.url).pathname;
        const __dirname = path.dirname(__filename);
        let filePath = path.resolve(__dirname, '../../public/temp/updatequantity.csv');
        let fileExists = fs.existsSync(filePath);
        const productArray = await csv().fromFile(filePath);
        if (fileExists) {
            console.log("start now")
            productArray.map(async (product) => {
                await Product.findOneAndUpdate
                    (
                        { sku: product.sku },
                        {
                            $set: {
                                quantity: product.quantity
                            }
                        }, { new: true, upsert: true }
                    )
            })
            fs.unlinkSync(filePath)
        }
        console.log("not find")
    } catch (error) {
        console.log(error)
    }
}

export { updateQuantity }