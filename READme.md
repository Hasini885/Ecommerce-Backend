# E-Commerce Backend API

A simple E-Commerce Backend built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** following the MVC architecture.

## API Endpoints

### User APIs

#### Create User

```http
POST /users
```

Request Body:

```json
{
  "name": "Hasini",
  "email": "hasini@gmail.com",
  "password": "123456"
}
```

#### Get All Users

```http
GET /users
```

---

### Product APIs

#### Create Product

```http
POST /products
```

Request Body:

```json
{
  "name": "Laptop",
  "price": 50000,
  "stock": 10
}
```

#### Get All Products

```http
GET /products
```

---

### Order APIs

#### Place Order

```http
POST /orders
```

Request Body:

```json
{
  "user": "USER_ID",
  "products": [
    {
      "product": "PRODUCT_ID",
      "quantity": 2
    }
  ]
}
```

#### Get All Orders

```http
GET /orders
```

---

## Database Models

### User

```js
{
  name: String,
  email: String,
  password: String
}
```

### Product

```js
{
  name: String,
  price: Number,
  stock: Number
}
```

### Order

```js
{
  user: ObjectId,
  products: [
    {
      product: ObjectId,
      quantity: Number
    }
  ]
}
```

---

## Author

**Hasini**
B.Tech CSE Student
SRM University AP
