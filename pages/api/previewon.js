export default async function previewOn(request, response) {
  // const password = 'algumacoisa'

  // if (request.query.password !== password || !request.query.slug) {
  //   return response.status(401).json({ message: 'Invalid token' })
  // }

  response.setPreviewData(null, {
    maxAge: 60 * 30 // 60sec (1min) * 60 = 60min
  })

  response.redirect('/')
  return response.end()
}
