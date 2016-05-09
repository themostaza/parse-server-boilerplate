import WinstonLogger from '../utils/logger'
const console = WinstonLogger('example')

export default async (req, res) => {
  try {
    const user = req.user
    if (!user) throw new Error('user not logged in')
    console.log(`Connected with user: ${user}`)
    let timer = req.params.timer
    if (!timer || timer > 5000) timer = 5000
    console.log(`Delay param: ${timer}`)
    const timerResult = await delay(timer)
    res.success(`Example success: ${timerResult}`)
  } catch (err) {
    res.error(`Example failure: ${err}`)
  }
}

const delay = ms => new Promise(resolve => setTimeout(() => resolve('Timeout completed'), ms))
