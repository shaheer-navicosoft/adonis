/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const DocumentsController = () => import('#controllers/documents_controller')
import User from '#models/user'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .get('/', async ({ auth }) => {
    console.log(auth.user) // User
    console.log(auth.authenticatedViaGuard) // 'api'
    console.log(auth.user!.currentAccessToken) // AccessToken
    return {
      hello: 'world',
    }
  })
  .use(
    middleware.auth({
      guards: ['api'],
    })
  )

router.get('/documents', [DocumentsController, 'index'])
