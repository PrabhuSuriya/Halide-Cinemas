import { GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings } from '@tsed/common';
import '@tsed/swagger';
import '@tsed/mongoose'; // import mongoose ts.ed module
import { $log } from 'ts-log-debug';

@ServerSettings({
  rootDir: __dirname,
  mount: {
    '/api/v1': '${rootDir}/**/controllers/**/*.ts'
  },
  acceptMimes: ['application/json'],
  logger: {
    debug: false,
    logRequest: true,
    requestFields: ['reqId', 'method', 'url', 'headers', 'query', 'params', 'duration']
  },
  swagger: {
    path: '/api-docs'
  },
  calendar: {
    token: true
  },
  port: 3300,
  httpsPort: 3400,
  mongoose: {
    url: 'mongodb://user:pass1234@ds261470.mlab.com:61470/halidedb'
  }
})
export class Server extends ServerLoader {
  /**
   * This method let you configure the middleware required by your application to works.
   * @returns {Server}
   */
  $onMountingMiddlewares(): void | Promise<any> {
    const cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      compress = require('compression'),
      methodOverride = require('method-override'),
      cors = require('cors');

    this.use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(cors())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true
        })
      );

    return null;
  }

  $onReady() {
    $log.debug('Server initialized');
  }

  $onServerInitError(error): any {
    $log.error('Server encounter an error =>', error);
  }
}
