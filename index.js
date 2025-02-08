import axios from "axios";

class Request {
    constructor(url, curentUser = 1){
        this.url = url;
        this.currentUser = curentUser;
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

const test = new Request("http://localhost:3000/api", 5000);
const test2 = new Request("http://localhost:3000/api", 1000);
const test3 = new Request("http://localhost:3000/api", 5000);
const test4 = new Request("http://localhost:3000/api", 1000);
const test5 = new Request("http://localhost:3000/api", 1000);
const test6 = new Request("http://localhost:3000/api", 100);


test.Get();
test2.Get();
test3.Get();
test4.Get();
test5.Get();
test6.Get();

const time = new Date().getMilliseconds();
console.log("end time: ", time, "s");