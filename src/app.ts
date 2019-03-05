import express from 'express';
import * as bodyParser from "body-parser";


class App {

   public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.configHeader();
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