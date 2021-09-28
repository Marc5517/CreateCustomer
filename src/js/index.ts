import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

interface ICustomer {
    customerNr: number
    name: string
    email: string
    addresse: string
    townCity: string
    postNr: number
    telefonNr: number
    currency: string
    cvr: number
}

// use https (http secure).
// http (non secure) will make the app complain about mixed content when running the app from Azure
let baseUrl: string = "https://customerrestservice.azurewebsites.net/api/Customers"

new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        addData: { name: "", email: "", addresse: "", townCity: "", country: "", postNr: 0, telefonNr: 0, currency: "", cvr: 0},
        addMessage: ""
    },
    methods: {
        addCustomer() {
            axios.post<ICustomer>(baseUrl, this.addData)
                .then((response: AxiosResponse) => {
                    
                    let message: string = "Skabningen af ny kunde er " + response.statusText
                    this.addMessage = message
                })
                .catch((error: AxiosError) => {
                    // this.addMessage = error.message
                    alert(error.message)
                })
        }
    }
})
