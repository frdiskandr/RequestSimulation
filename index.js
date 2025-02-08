import axios from "axios";

class Request {
    constructor(url, curentUser = 1){
        this.url = url;
        this.currentUser = curentUser;
        this.su =0;
    }

    async Get(){
        const url = this.url;
        const currentUser = this.currentUser;
        let time = 0;
        console.log("start time: ", time);

        for (let i = 0; i < currentUser; i++){
            try{
                const response = await axios.get(url);
                console.log("response ke: ", i);
                console.log("success");
            }catch(e){
                console.error("error req ke: ", i);
                console.error(e);
            }finally{
                let Reqtime = new Date().getMilliseconds();
                time += Reqtime;
            }
        }

        time =  (time / currentUser) /100;
        console.log("end time: ", time,"s");    
    }
}


const req = new Request("https://jsonplaceholder.typicode.com/posts", 10);
req.Get();