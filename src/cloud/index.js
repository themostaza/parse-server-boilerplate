import example from './exampleFunction'

Parse.Cloud.define('hello', (req, res) => res.success('Hi'))

Parse.Cloud.define('example', example)
