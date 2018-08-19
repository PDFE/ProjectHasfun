import apis from "./apis";
import apiServer from "./config";
import {stringify} from "querystring";

const apiFunctions = ((apis) => {
    let apiFunctions: {
        [props: string]: (params: any,body:any) => Promise<Response>
    } = {};
    for (let index = 0; index < apis.length; index++) {
        const element = apis[index];
        apiFunctions[element.name] = (args,body) => fetch(
            apiServer +
                element.uri +
                element.params === null ?
                "" : (element.params as any[]).reduce(
                    (previousValue, currentValue) =>
                        previousValue + "/" + args[currentValue], ""
                ) + (body && element.method==="GET"? "?"+stringify(body):""),
            ({
                "GET": {
                    method: "GET"
                },
                "POST":{
                    method:"POST",
                    body
                }
            } as { [a: string]: RequestInit})[element.method]
        ).then((k:Response)=>{
            if(k.ok!=true)throw new Error("Request Failed: Code "+k.status)
            return k;
        });
    }
return apiFunctions
}) (apis);

export default {
    install: function (Vue: any) {
        Vue.prototype.$api = apiFunctions
    }
}
