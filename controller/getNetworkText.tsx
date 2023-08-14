export class TextController{
    apiURL = 'https://meowfacts.herokuapp.com/';

    private _getAPICall(){
        return this._processAPI('result');
    }

    private _processAPI(input){
        var result = 'Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.';
        
        return result;
    }

    getTextURL() {
       return this._getAPICall();

    }
}