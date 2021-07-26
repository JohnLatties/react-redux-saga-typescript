import { Request, Response } from 'express'
import { Controller } from '../../controller/base/Controller'
import { HttpRequest } from '../../controller/base/Http'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body,
      params: request.params,
      query: request.query
    }

    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      response.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      response.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}