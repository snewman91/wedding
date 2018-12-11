const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/events', (req, res) => res.render('pages/events'))
  .get('/accommodations', (req, res) => res.render('pages/accommodations'))
  .get('/photos', (req, res) => res.render('pages/photos'))
  .get('/registry', (req, res) => res.render('pages/registry'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
