const express = require('express')
const app = express()
const port = 4000

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTION"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


app.get('/', (req, res) => {
  res.send('hello!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//サンプルデータ
const customers = [
  {title: '佐藤', id: '1'},
  {title: '山田', id: '2'},
  {title: '橋本', id: '3'},
  {title: '鈴木', id: '4'},
  {title: '安藤', id: '5'},
]

//GET
app.get('/api/customers', (req, res) => {
  res.send(customers)
});
