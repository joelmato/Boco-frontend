import {getApiClient} from "@/service/ApiService";

export default {
    getRentals(id) {
        return getApiClient.get('rentals/product/'+id)
    },
    newRental(dateFrom, dateTo, productId, userId) {
        const rental = {dateFrom: dateFrom, dateTo: dateTo, accepted: false, productId: productId, userId: userId}
        return getApiClient.get("rentals", {
            params: {rental}
        })
    },
    accept(id){
        return getApiClient.put('rentals/accept/'+id)
    },

    deny(id){
        return getApiClient.delete('rentals/'+id)
    }
}