function newStyle() {
  console.log("in function newStyle");
  let newColor = "";
  let newFont = "";
  var element = document.getElementById("target"); //找到html中id为“target”那个tag
  element.style.color = "purple"; //对那个tag中style arrtribute 进行更改
  element.style.fontFamily = "Impact";
}

function showMoreFunc() {
	let instagram = document.createElement("li");
	instagram.innerHTML ="<a href= 'https://www.instagram.com/caitlynz67/'>Instagram</a>";

        let facebook = document.createElement("li");
	youtube.innerHTML ="<a href= 'https://www.facebook.com/caitlyn.zhang.1'>Facebook</a>";

	document.getElementById("list").appendChild(youtube);
	document.getElementById("list").appendChild(instagram);

	let text = document.getElementById("showMore");
	document.getElementById("2c").removeChild(text);
}
