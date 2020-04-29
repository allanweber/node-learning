import jsf from 'json-schema-faker'
import faker from 'faker'
import Chance from 'chance'
import { schema } from './users-mock-schema'
import fs from 'fs'

jsf.extend('faker', () => faker)
jsf.extend('chance', () => new Chance())

jsf.resolve(schema).then(function (result) {
  const json = JSON.stringify(result, null, 2)
  fs.writeFile('./src/data/db.json', json, (err) => {
    if (err) {
      return console.log(err)
    } else {
      return console.log('Mock data generated')
    }
  })
})
