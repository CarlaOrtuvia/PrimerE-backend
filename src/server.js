import express from "express";
import productsRouter from './router/product.routes.js';
import cartRouter from './router/cart.routes.js';

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartRouter);


const PORT = 8082;

app.listen(PORT, ( )=>{
     console.log(`Server ok en puerto: ${PORT}`)
});
