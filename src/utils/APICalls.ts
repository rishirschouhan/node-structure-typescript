import axios from 'axios';

export class APICalls {

    public async googleSheetAPICall() {

        let promise = new Promise((resolve, reject) => {
            axios.get(`THIRD PARTY API`)
            .then((response)=>{
                return resolve(response);
            }).catch((error)=>{
                return reject(error);
            })
          });
          
          let result = await promise;
          return result;
    }

}