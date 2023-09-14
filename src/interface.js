// const baseUrl = process.env.VUE_APP_SERVER_URL
const baseUrl = 'https://anyabi.xyz/'

export default {
    // traceview
    getMap: `${baseUrl}/traceview/getMap`,
    analyze: `${baseUrl}/traceview/analyze`,
    selector: `${baseUrl}/func/selector`,
    topic: `${baseUrl}/event/topic`,
    getABI:`${baseUrl}/abi/get`,
    submitABI:`${baseUrl}/abi/submit`,
}