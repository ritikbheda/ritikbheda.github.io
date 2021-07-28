/** Add any JavaScript you need to this file. */

function setHandlers(){

    let someData = window.database;


    let data = window.database;
    let total_images = data.length;    
console.log("got out");
    var filter_array = ["filter-style","filter-city", "filter-artist"];
    for(let i =0; i< filter_array.length; i++){
        document.getElementById(filter_array[i]).addEventListener('click', function(){
            document.getElementById(filter_array[i]).nextElementSibling.classList.toggle("hidden");
            document.getElementById(filter_array[i]).nextElementSibling.classList.toggle("active");
            document.getElementById(filter_array[i]).classList.toggle("option_active");
        })
        
    }
    

    var image_here = document.getElementById('image-here');

    function addImage(imageData, wid, hei){
        var img_ele = document.createElement('img');
        img_ele.src= imageData;
        img_ele.classList.add("imgg");
        img_ele.setAttribute('width', wid);
        img_ele.setAttribute('height', hei);
       
        img_ele.setAttribute('alt', "image of something unknown");
        return img_ele;
    }

    function addTitle(title){
        var small_ele = document.createElement('small');
        var text = document.createTextNode(title);
        small_ele.appendChild(text);    
        small_ele.classList.add("title-image-card");
        return small_ele;
    }

    function addArtist(artistName){
        var small_ele = document.createElement('small');
        var text = document.createTextNode(artistName);
        small_ele.appendChild(text);    
        small_ele.classList.add("artist-name-image-card");
        return small_ele;
    }

    function addDesc(descp){
        var small_ele = document.createElement('small');
        var text = document.createTextNode(descp);
        small_ele.appendChild(text);    
        small_ele.classList.add("desc-image-card");
        return small_ele;        
    }

    function addPrice(price){
        var small_ele = document.createElement('small');
        var text = document.createTextNode("Prints from $" + price);
        small_ele.appendChild(text);    
        small_ele.classList.add("price-tag-image-card");
        return small_ele;                
    }
    function displayAll(ele){

        for(let i = 0; i< total_images; i++){
            let wid = 320;
            let hei = 320;
            var div_ele = document.createElement('div');
            div_ele.classList.add('each-image');
            if(data[i].height > data[i].width){
                wid = (data[i].width * 320) / data[i].height;
            }
            else{
                hei = (data[i].height * 320)/data[i].width;
            }


            div_ele.appendChild(addImage(data[i].imageAddress, wid, hei)); // image
            div_ele.appendChild(addTitle(data[i].title));   // title
            div_ele.appendChild(addArtist(data[i].artist)); // artist
            div_ele.appendChild(addPrice(data[i].price)); //Price
            div_ele.appendChild(addDesc(data[i].desc));  // Description
            var aa = Number(hei) + 50;
           div_ele.style.height = aa + "px";

            ele.appendChild(div_ele);

        }
    }

    function filterCity(ele, city){
        total_images = 0;
        for(let i = 0; i< data.length; i++){
            if(data[i].city == city){
                console.log(data[i].city);
                let hei = 320; 
                let wid = 320;
                var div_ele = document.createElement('div');
                div_ele.classList.add('each-image');
                if(data[i].height > data[i].width){
                    wid = (data[i].width * 320) / data[i].height;
                }
                else{
                    hei = (data[i].height * 320)/data[i].width;
                }
                div_ele.appendChild(addImage(data[i].imageAddress, wid, hei)); // image
                div_ele.appendChild(addTitle(data[i].title));   // title
                div_ele.appendChild(addArtist(data[i].artist)); // artist
                div_ele.appendChild(addPrice(data[i].price)); //Price
                div_ele.appendChild(addDesc(data[i].desc));  // Description
                var aa = Number(hei) + 50;
                div_ele.style.height = aa + "px";
                total_images++;
                ele.appendChild(div_ele);
            }
        }
        
    }
    function fitlerss(ele){
        var city_array = ["Ahmedabad", "Mumbai", "Toronto"];
        for(let i =0; i< city_array.length; i++){
            document.getElementById(city_array[i]).addEventListener('click', function(){
                clearEverything(ele);
                filterCity(ele, city_array[i]);
                toHover();
                clearKaro();
            })   
        }

        var style_array = ["Portrait", "Architectural", "Nature", "Street"];
        for(let i =0; i< style_array.length; i++){
            document.getElementById(style_array[i]).addEventListener('click', function(){
                clearEverything(ele);
                filterStyle(ele, style_array[i]);
                toHover();
                clearKaro();
            })   
        }

        var artist_array = ["JohnDoe", "David", "Ilkin"];
        for(let i =0; i< artist_array.length; i++){
            document.getElementById(artist_array[i]).addEventListener('click', function(){
                clearEverything(ele);
                filterArtist(ele, artist_array[i]);
                toHover();
                clearKaro();
            })   
        }


    }

    function clearKaro(){
        document.getElementById("clear").style.display = "block";
        document.getElementById("clear").addEventListener('click', function(){
           clearEverything(image_here);
           total_images = data.length; 
           makeIamgeCard(image_here);
        })
    }

    function filterArtist(ele, artist){
        total_images = 0;
        for(let i = 0; i< data.length; i++){
            if(data[i].artist == artist){
                console.log(data[i].artist);
                let hei = 320; 
                let wid = 320;
                var div_ele = document.createElement('div');
                div_ele.classList.add('each-image');
                if(data[i].height > data[i].width){
                    wid = (data[i].width * 320) / data[i].height;
                }
                else{
                    hei = (data[i].height * 320)/data[i].width;
                }
                div_ele.appendChild(addImage(data[i].imageAddress, wid, hei)); // image
                div_ele.appendChild(addTitle(data[i].title));   // title
                div_ele.appendChild(addArtist(data[i].artist)); // artist
                div_ele.appendChild(addPrice(data[i].price)); //Price
                div_ele.appendChild(addDesc(data[i].desc));  // Description
                var aa = Number(hei) + 50;
                div_ele.style.height = aa + "px";
                total_images++;
                ele.appendChild(div_ele);
            }
        }
    }
    function filterStyle(ele, style){
        total_images = 0;
        for(let i = 0; i< data.length; i++){
            if(data[i].style == style){
                console.log(data[i].style);
                let hei = 320; 
                let wid = 320;
                var div_ele = document.createElement('div');
                div_ele.classList.add('each-image');
                if(data[i].height > data[i].width){
                    wid = (data[i].width * 320) / data[i].height;
                }
                else{
                    hei = (data[i].height * 320)/data[i].width;
                }
                div_ele.appendChild(addImage(data[i].imageAddress, wid, hei)); // image
                div_ele.appendChild(addTitle(data[i].title));   // title
                div_ele.appendChild(addArtist(data[i].artist)); // artist
                div_ele.appendChild(addPrice(data[i].price)); //Price
                div_ele.appendChild(addDesc(data[i].desc));  // Description
                var aa = Number(hei) + 50;
                div_ele.style.height = aa + "px";
                total_images++;
                ele.appendChild(div_ele);
            }
        }
    }

    function clearEverything(ele){
        ele.innerHTML = " ";
    }

    function makeIamgeCard(ele){
      
        displayAll(ele);
        toHover();
        fitlerss(ele);
        
    }

    makeIamgeCard(image_here);

   
    
function toHover(){ 
    var rr = document.getElementsByClassName("each-image");
    for(let i = 0; i < total_images; i++){
        rr[i].addEventListener('mouseover', function(){
            document.getElementsByClassName("desc-image-card")[i].style.display = "block";
            document.getElementsByClassName("each-image")[i].style.opacity = "0.8";
        });
        rr[i].addEventListener('mouseout', function(){
            document.getElementsByClassName("desc-image-card")[i].style.display = "none";
            document.getElementsByClassName("each-image")[i].style.opacity = "1";

        });
    }

}
        
    var jj = document.getElementById('side-nav-tool');
    jj.addEventListener('click', function(){
        console.log("tool activates");
        document.getElementById("accordian").style.display = "block";
        document.getElementById("to-close").style.display = "block";
        fitlerss(image_here);
        document.getElementById("to-close").addEventListener('click', function(){
            
        document.getElementById("accordian").style.display = "none";
        document.getElementById("to-close").style.display = "none";
        })        
    
    })


  

}

window.onload = setHandlers;