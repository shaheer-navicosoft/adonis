// import type { HttpContext } from '@adonisjs/core/http'

import Document from '#models/document'

export default class DocumentsController {
  index() {
    return Document.all()
  }
}
