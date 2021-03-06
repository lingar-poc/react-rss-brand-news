import {cnbcUrl, cnnUrl, foxUrl, myProxy} from "../SystemGlobals";

//function for testing:

function handleData(data) {
    console.log("Call back - handle data - ", data);
}

function onFailure() {

    console.error("Request encountered error:");
    console.error(this.statusText);


}


/**Handling Fox Data **/

function onFoxSuccess() {
    console.log("Fox Request done well.", this.response);
    // console.log("request text = ", this.responseText)
    //http://feeds.foxnews.com/foxnews/latest
    //Here we define what values will be passed to the callback, and we make it invoke
    //It's about functional programming. It's help U do reverse things in different ways.

    // console.log("this onFoxSuccess = ", this);

    // this.callback.apply(this, this.arguments);
    let xml = this.responseXML;

    console.log("XML = \n", xml)
    let dataObj = xmlFoxToObject(xml);//converting the xml to object
    console.log("FOX Data object = ", dataObj);
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

function getFoxData(callback /*, opt_arg1, opt_arg2, ... */) {

    console.log("getFoxData")
    let xhr = new XMLHttpRequest();
    //this callback is predefinde prop of the xhr
    xhr.callback = callback;//will set the callback of this xhr (will be used at the success function)

    // xhr.arguments = Array.prototype.slice.call(arguments, 2);//U can add optional args to callback by this idea
    xhr.responseType = "document";
    xhr.onload = onFoxSuccess;
    xhr.onerror = onFailure;
    xhr.open("GET", myProxy + foxUrl, true);
    xhr.send(null);
}

/**
 * This function turns the xml data to proper object data.
 * I leave some commented logs for further development and debugging purposes.
 * @param data = the xml data
 * @returns {[]} - Array object with many news items.
 */
function xmlFoxToObject(data) {
    console.log("xml fox, data = ", data)
    let arrayOfData = [];
    //itemObj = {title: ..., description: ...};
    // let items = data.getElementsByTagName('item');//this is array so u need to found the first element
    // let items = data.querySelectorAll(".regularitem");//getElementsByClassName
    let items = data.getElementsByClassName("regularitem");
    console.log("items = ", items);
    let counter = 0;
    for (let item of items) {
        // console.log("Html = ", item.innerHTML);
        //Getting the item link
        // const link =  item.getElementsByTagName("link")[0].innerHTML;
        // console.log("Link = ", link)
        // console.log("Loop ", counter++);
        // console.log("item = ", item);
        let content = item.getElementsByClassName("itemtitle")[0];
        let link = content.getElementsByTagName("a")[0].getAttribute("href");
        const title = content.getElementsByTagName("a")[0].innerHTML;
        const description = item.getElementsByClassName("itemcontent")[0].innerHTML;
        // console.log(link , title, description)

        // console.log("lingar = " + item.getElementsByClassName("itemtitle")[0].getElementsByTagName("a")[0])
        // console.log("item title = ", item.getElementsByClassName("itemtitle")[0].getElementsByTagName("a")[0].innerHTML);

        let obj1 = {title: title, description: description, link: link, provider: "fox", imgUrl: "/#"};
        arrayOfData.push(obj1);


    }
    return arrayOfData;


}

/** Handling CNN data **/
function onCnnSuccess() {
    console.log("Request done well.");
    //Here we define what values will be passed to the callback, and we make it invoke
    //It's about functional programming. It's help U do reverse things in different ways.

    // console.log("this onCnnSuccess = ", this);

    // this.callback.apply(this, this.arguments);
    let xml = this.responseXML;

    console.log("XML = \n", xml)
    let dataObj = xmlCnnToObject(xml);//converting the xml to object
    console.log("Cnn Data object = ", dataObj);
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
        const link = item.getElementsByTagName("link")[0].innerHTML;
        // console.log("Link = ", link)
        // console.log("Loop ", counter++);
        // console.log("item = ", item);
        // console.log("item try = ", item.getElementsByTagName("title"));

        //getting the item image
        const media = item.getElementsByTagName("media:content");
        let imgUrl = "/#"
        // console.log("media = " , media)
        if (media.length > 0) {
            const media2 = media[media.length - 1];
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

/**Handling cnbc Data*/

function onCnbcSuccess() {
    console.log("Request done well.");
    //Here we define what values will be passed to the callback, and we make it invoke
    //It's about functional programming. It's help U do reverse things in different ways.

    // console.log("this onCnbcSuccess = ", this);

    // this.callback.apply(this, this.arguments);
    let xml = this.responseXML;

    console.log("XML = \n", xml)
    let dataObj = xmlCnbcToObject(xml);//converting the xml to object
    console.log("CNBC ", dataObj);
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

function getCnbcData(callback) {
    console.log("getCnbcData")
    let xhr = new XMLHttpRequest();
    //this callback is predefinde prop of the xhr
    xhr.callback = callback;//will set the callback of this xhr (will be used at the success function)
    xhr.onload = onCnbcSuccess;
    xhr.onerror = onFailure;
    xhr.open("GET", myProxy + cnbcUrl, true);
    xhr.send(null);
}

/**
 * This function turns the xml data to proper object data.
 * I leave some commented logs for further development and debugging purposes.
 * @param data = the xml data
 * @returns {[]} - Array object with many news items.
 */
function xmlCnbcToObject(data) {
    let arrayOfData = [];
    let items = data.getElementsByTagName('item');//this is array so u need to found the first element
    console.log("items cnbc = ", items);
    let counter = 0;
    for (let item of items) {
        // console.log("Html = ", item.innerHTML);
        //Getting the item link
        let  title = item.getElementsByTagName("title")[0].innerHTML;
        let description = item.getElementsByTagName("description")[0].innerHTML;
        const link = item.getElementsByTagName("link")[0].innerHTML;
        // console.log("Link = ", link)
        // console.log("Loop ", counter++);
        // console.log("item = ", item);
        // console.log("item try = ", item.getElementsByTagName("title"));



        //removing cdata garbage
        title = title.trim().replace(/^(\/\/\s*)?<!\[CDATA\[|(\/\/\s*)?\]\]>$/g, '');
        description = description.trim().replace(/^(\/\/\s*)?<!\[CDATA\[|(\/\/\s*)?\]\]>$/g, '');


        let obj1 = {title: title, description: description, link: link, provider: "cnbc", imgUrl: "/#"};
        arrayOfData.push(obj1);


    }
    return arrayOfData;


}

export {getCnnData, getFoxData, getCnbcData, handleData};