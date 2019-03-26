function getHttpReq(){
    let xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'http://localhost/practice/retreive.php', true);
    xhr.responseType = 'text';

    //see if the thing is changed
    xhr.onreadystatechange = function()
    {
        //check if the status is 200(means everything is okay)
        if (this.status == 200 && this.readyState == 4)
        {
            //return server response as an object with JSON.parse
            document.getElementById("phpid").innerText = this.responseText;
			alert("Ready");
        }
        else if(this.status == 404){
            alert("error")
        }
		else if(this.status == 403){
			alert("403");
		}
        else{
			
        }
    }
    //call send
    xhr.send();//send call
    //Common Types of HTTP Statuses
    // 200: OK
    // 404: ERROR
    // 403: FORBIDDEN
}