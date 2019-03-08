import { Request, Response } from 'express';
import { AdminManagmentServices } from '../services/adminManagmentServices';
import constant from '../utils/constant.json';

export class AdminManagmentCtrl {

    public async getData(req: Request, res: Response) {

        let result = await AdminManagmentServices.prototype.getData();
        if (result)
        {
            res.status(constant.HttpStatus.OK);
            res.send(result);
        } else {
            res.status(constant.HttpStatus.BAD_REQUEST);
            res.send(constant.ERROR.SOMETHING_WENT_WRONG);
        }
    }

    public async postRequest(req: Request, res: Response) {

        let result = await AdminManagmentServices.prototype.postData(req.body);
        if (result)
        {
            res.status(constant.HttpStatus.OK);
            res.send(result);
        } else {
            res.status(constant.HttpStatus.BAD_REQUEST);
            res.send(constant.ERROR.SOMETHING_WENT_WRONG);

        }
    }

}