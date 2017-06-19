const List = require('./server/db/models/List.js')

let listItem = {
  item: 'Test1'
}
new List(listItem).save().then(() => {
  console.log('Saved')
}).catch((err) => {
  console.log('Errorr', err)
})
