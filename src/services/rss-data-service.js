import {cnnUrl, myProxy} from "../SystemGlobals";

function onCnnSuccess() {
    console.log("Request done well.");
    //Here we define what values will be passed to the callback, and we make it invoke
    //It's about functional programming. It's help U do reverse things in different ways.

    // console.log("this onCnnSuccess = ", this);

    // this.callback.apply(this, this.arguments);
    let xml = this.responseXML;

    console.log("XML = \n", xml)
    let dataObj = xmlCnnToObject(xml);//converting the xml to object
    console.log("Data object = ", dataObj);
    const data = [dataObj];

    //The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
    //In other words - we here call the callback that assigned to the xhr, we pass it 1-the this that will be considered this for the function
    //and 2 - other array that will serve as arbitrary array. We don't know how much params the callback has, so will refer it as (callback(args...)
    //at JS it's available by default by the argument props - https://stackoverflow.com/a/2141530/9727918

    this.callback.apply(this, data);//that's call the callback - u need to pass here a proper object

    //it refer it like arbitrary args. so for example:
    /*

            function handleData2(data) {

                console.log("data = " , data);//will show the first element of array
            }
            this for example will generate a run time error
            this.callback.apply(this,12);
     */


}

function onFailure() {

    console.error("Request encountered error:");
    console.error(this.statusText);


}



function getCnnData(callback /*, opt_arg1, opt_arg2, ... */) {
    console.log("getCnnData")
    let xhr = new XMLHttpRequest();
    //this callback is predefinde prop of the xhr
    xhr.callback = callback;//will set the callback of this xhr (will be used at the success function)

    // xhr.arguments = Array.prototype.slice.call(arguments, 2);//U can add optional args to callback by this idea
    xhr.onload = onCnnSuccess;
    xhr.onerror = onFailure;
    xhr.open("GET", myProxy + cnnUrl, true);
    xhr.send(null);
}

function handleData(data){
    console.log("Call back - handle data - " , data);
}

const RssDataService = {

}

/**
 * This function turns the xml data to proper object data.
 * I leave some commented logs for further development and debugging purposes.
 * @param data = the xml data
 * @returns {[]} - Array object with many news items.
 */

function xmlCnnToObject(data) {
    let arrayOfData = [];
    //itemObj = {title: ..., description: ...};
    let items = data.getElementsByTagName('item');//this is array so u need to found the first element
    // console.log("items = ", items);
    let counter = 0;
    for (let item of items) {
        // console.log("Html = ", item.innerHTML);
        //Getting the item link
        const link =  item.getElementsByTagName("link")[0].innerHTML;
        // console.log("Link = ", link)
        // console.log("Loop ", counter++);
        // console.log("item = ", item);
        // console.log("item try = ", item.getElementsByTagName("title"));

        //getting the item image
        const media  =  item.getElementsByTagName("media:content");
        let imgUrl = "/#"
        console.log("media = " , media)
        if(media.length > 0){
            const media2 = media[media.length-1];
            // console.log("media 2 ",  media2);
            imgUrl = media2.getAttribute("url");
            // console.log("imgUrl = " + imgUrl)

        }



        let title = item.getElementsByTagName("title")[0].innerHTML;
        //removing cdata garbage
        title = title.trim().replace(/^(\/\/\s*)?<!\[CDATA\[|(\/\/\s*)?\]\]>$/g, '');

        // console.log("Title = ", title);
        // console.log(item.getElementsByTagName("description"));
        let description = "no description";
        let innerData = item.getElementsByTagName("description");
        // console.log(innerData)
        if (innerData.length > 0) {
            description = item.getElementsByTagName("description")[0].innerHTML;
            //removing cdata garbage
            description = description.trim().replace(/^(\/\/\s*)?<!\[CDATA\[|(\/\/\s*)?\]\]>$/g, '');

        }
        // console.log("description = ", description);


        let obj1 = {title: title, description: description, link: link, provider: "cnn", imgUrl: imgUrl};
        arrayOfData.push(obj1);


    }
    return arrayOfData;


}

export {getCnnData, handleData};