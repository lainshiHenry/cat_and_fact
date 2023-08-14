export class ImageController{
    apiURL = 'https://api.thecatapi.com/v1/images/search';
    
    private _getAPICall(){
        return this._processAPI();
    }

    private _processAPI(){
        var resultURL = 'https://cdn2.thecatapi.com/images/12p.jpg';

        return resultURL;
    }

    getImageURL() {
       return this._getAPICall();

    }
}