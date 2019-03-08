import { APICalls } from '../utils/APICalls';

export class AdminManagmentServices {
        
    async getData() {
        try {
            let result = "GET REQUEST"
            return result;

        } catch (error) {
            return error;
        }
    }

    async postData(body : object) {
        try {
            let result = body
            return result;

        } catch (error) {
            return error;
        }
    }    



}