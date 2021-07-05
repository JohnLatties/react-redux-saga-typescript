import config from './config'

async function start () {
  const app = (await import('./api')).default
  const port = process.env.PORT || 3002
  console.log('MYSQL_HOST', config.mysql.host)
  app.listen(port, () => { console.log(`Server running at http://localhost:${port}`) })
}

start()