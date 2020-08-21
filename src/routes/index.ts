import { Router, Request, Response } from "express";
import { v4 } from 'uuid'

export default (router: Router): void => {
  router.get('/', (req: Request, res: Response) => {
    res.redirect(`/${v4()}`)
  })
  router.get('/:room', (req: Request, res: Response) => {
    res.render('room', { roomId: req.params.room })
  })
}