import express from 'express'
import { ParseServer } from 'parse-server'
import expressRoutes from './express'
import * as keys from './config/keys'

const app = express()

// Serve the Parse API on the /parse URL prefix
const api = new ParseServer({
  databaseURI: keys.DATABASE_URI,
  cloud: keys.CLOUD_PATH,
  appId: keys.APP_ID,
  masterKey: keys.MASTER_KEY,
  serverURL: keys.SERVER_URL,
  allowClientClassCreation: false
})
app.use(keys.PARSE_MOUNT, api)

// Serve the express routes
app.use(expressRoutes)

// Start listening
app.listen(keys.PORT, () => console.log(`${keys.APP_NAME} running on port ${keys.PORT}.`))


// Fix for unhandled promise errors
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled', reason, p) // log all your errors, 'unsuppressing' them.
  throw reason // optional, in case you want to treat these as errors
})

// Export the app for tests
export default app
