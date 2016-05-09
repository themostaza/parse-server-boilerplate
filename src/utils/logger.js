import winston from 'winston'
winston.emitErrs = true

const winstonLogger = new winston.Logger({
  filters: [(level, msg, meta) => {
    if (meta.functionName) {
      const newMeta = meta
      const newMsg = `[${meta.functionName}] ${msg}`
      delete newMeta.functionName
      return newMsg
    }
    return msg
  }],
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
})

export default functionName => ({
  log: msg => winstonLogger.log(msg, { functionName }),
  info: msg => winstonLogger.info(msg, { functionName }),
  warn: msg => winstonLogger.warn(msg, { functionName }),
  error: msg => winstonLogger.error(msg, { functionName })
})
