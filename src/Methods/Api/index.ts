import apis from "./apis";
import apiServer from "./config";

const apiFunctions = ((apis) => {
    let apiFunctions: {
        [props: string]: (params: any) => Promise<Response>
    } = {};
    for (let index = 0; index < apis.length; index++) {
        const element = apis[index];
        apiFunctions[element.name] = (args) => fetch(
            apiServer +
                element.uri +
                element.params === null ?
                "" : (element.params as any[]).reduce(
                    (previousValue, currentValue) =>
                        previousValue + "/" + args[currentValue], ""
                )
        );
    }
    return apiFunctions
})(apis);

export default {
    install: function (Vue: any) {
        Vue.prototype.$api = apiFunctions
    }
}
