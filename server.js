import 'dotenv/config'
import app from './src/app.js'

const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || 'development'

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT} - (${NODE_ENV})`
    )
})
