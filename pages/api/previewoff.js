export default function previewOff(request, response) {
  response.clearPreviewData()
  response.redirect('/')
  return response.end()
}
