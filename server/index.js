import dotenv from 'dotenv'
import { app } from './app.js'
import connectDB from './db/index.js'
import { cron } from './cronjob/cron/updatequantity.cron.js'


dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            cron
            console.log(`App is listen on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
