import { Request, Response, NextFunction } from 'express';
import { AdminManagmentCtrl } from "../controller/adminManagmentCtrl";
export class Routes {
    
    public adminManagmentCtrl = new AdminManagmentCtrl;

    public routes(app: any): void {
        app.route('/')
            .get((req: Request, res: Response, next : NextFunction) => {
                next();
            }, this.adminManagmentCtrl.getData);

            app.route('/post')
            .post((req: Request, res: Response, next : NextFunction) => {
                next();
            }, this.adminManagmentCtrl.postRequest);

    }
}