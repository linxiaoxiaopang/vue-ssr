import createApp from '../main'

export default (context) => {
  return new Promise(async (resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)
    router.onReady(async () => {
      const matchedComponents = router.getMatchedComponents()
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      const pArr = []
      matchedComponents.map(item => {
        if(item.asyncData) {
          pArr.push(item.asyncData({ store }))
        }
        return (app)
      })
      await Promise.all(pArr)
      context.state = store.state
      console.log('context.state', context.state.message)
      // Promise 应该 resolve 应用程序实例，以便它可以渲染
      resolve(app)
    }, reject)
  })

}
