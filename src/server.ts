import httpServer from "./config/app"

httpServer.listen(3000, () => {
  console.log('Backend listening on port 3000')
})
