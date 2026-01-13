import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { pool } from './database/connection'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'API ERP rodando' })
})

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

pool.query('select 1')
  .then(() => console.log('🟢 Banco conectado'))
  .catch(() => console.log('🔴 Erro ao conectar no banco'))
