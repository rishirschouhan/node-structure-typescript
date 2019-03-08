import express from 'express';
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";

class App {

   public app: express.Application;
   public route: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.configHeader();
        this.route.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private configHeader(): void {
        this.app.use((request, response, next) => {
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.setHeader('Access-Control-Allow-Methods', '*');
            response.setHeader('Access-Control-Allow-Headers', '*');
            next();
        });
    }
}

export default new App().app;