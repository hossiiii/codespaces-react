const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    try {
    	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000')
      res.status(201).send('hello!!!')
    } catch (error) {
        console.error(error)
    }
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
