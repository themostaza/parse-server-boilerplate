export const APP_NAME = 'Parse-Server Boilerplate'

// Parse settings
export const DATABASE_URI = process.env.DATABASE_URI || process.env.MONGOLAB_URI
export const CLOUD_CODE_MAIN = process.env.CLOUD_CODE_MAIN || `${__dirname}app/cloud/index.js`
export const APP_ID = process.env.APP_ID
export const MASTER_KEY = process.env.MASTER_KEY
export const SERVER_URL = process.env.SERVER_URL || 'http://localhost:1337'
export const PARSE_MOUNT = process.env.PARSE_MOUNT
export const PORT = process.env.PORT || 1337
