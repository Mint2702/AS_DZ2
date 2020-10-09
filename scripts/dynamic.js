let content = document.getElementById("myHeader");

let button_show_All = document.getElementById("showAll") 
button_show_All.addEventListener('click', showAll) 

let flag = false;

function showAll(){
    let inserted_data1 = `<div id="part1">
    <div class="text1">
      See next city: <a href="#part2">London</a>
      <div class="Logo1">
        Moscow
      </div>
      <div class="Main1">
        I lived in Moscow for the longest period of my live, around 10 years.<br>
        Love this city beacuse of it's beauty and importance to me. A lot of really important events happend to me in this city.
      </div>
      <div class="image">
        <div class="ImagesColumn">
          <img src="static/images/MoscowCity1.jpg" style="width:80%;height:45%;" >
          <img src="static/images/Luzhniki.jpg" style="width:80%;height:45%;">
        </div>
        <div class="ImagesSpace">
          <img src="static/images/moscow1.webp" style="width:60%;height:30%;">
          <img src="static/images/nikolskaya.jpg" style="width:60%;height:30%;">
          <img src="static/images/carskaya-ploshcad-moskva-jk-842327202-6.jpg" style="width:60%;height:30%;">
        </div>
      </div>
    </div>
    </div>
    `
    let inserted_data2 = `<div id="part2">
    <div class="text2">
    See previous city: <a href="#part1">Moscow</a>
    <div class="Logo2">
      London
    </div>
    <div class="Main2">
      London was home for me for 4 years.<br>
      It's very importa for me beacuse it influenced me a lot. Here are some pictures of the area where I lived(Camden Town).
    </div>
    <div class="image">
      <div class="ImagesColumn">
        <img src="static/images/london1.jpg" style="width:90%;height:45%;" >
        <img src="static/images/london2.jpg" style="width:90%;height:45%;">
      </div>
      <div class="ImagesSpace">
        <img src="static/images/Camden_Town.jpg" style="width:60%;height:30%;">
        <img src="static/images/camden2.jpg" style="width:60%;height:30%;">
        <img src="static/images/camden3.png" style="width:60%;height:30%;">
      </div>
    </div>
  </div>
    </div>
    `
    if (flag == false){
        content.insertAdjacentHTML('afterend', inserted_data2);
        content.insertAdjacentHTML('afterend', inserted_data1);
        flag = true;
    } 
    else alert("All articles are shown already")
    
}