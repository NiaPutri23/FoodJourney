// fungsi fungsi untuk melakukan request data pada API pake fetch
import API_ENDPOINT from '../globals/api-endpoint';

class restoDbSource {
  static async restoList() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json(); // Panggil .json() sebagai fungsi
    return responseJson.restaurant;
  }

  static async review() {
    const response = await fetch(API_ENDPOINT.REVIEW);
    return response.json();
    // gatau
  }
}

export default restoDbSource;
