import express from "express"
import cors from "cors"

const app = express();
app.use(cors({
    origin: 'http://localhost:3001' || process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))


import { router as userRouter } from './routes/user.routes.js'
import { router as categoryRouter } from './routes/category.routes.js'
import { router as productRouter } from './routes/product.routes.js'

app.use("/api/v1/users", userRouter)
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/product", productRouter)

// http://localhost:8000/api/v1/users/register


export { app }