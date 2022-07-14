window.onload = function(){
	var getNavi = document.getElementById('navigation');

	var mobile = document.createElement("span");
	mobile.setAttribute("id","mobile-navigation");
	getNavi.parentNode.insertBefore(mobile,getNavi);

	document.getElementById('mobile-navigation').onclick = function(){
		var a = getNavi.getAttribute('style');
		if(a){
			getNavi.removeAttribute('style');
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-menu.png)';
		} else {
			getNavi.style.display='block';
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-close.png)';
		}
	};
	var getElm = getNavi.getElementsByTagName("LI");
	for(var i=0;i<getElm.length;i++){
		if(getElm[i].children.length>1){
			var smenu = document.createElement("span");
			smenu.setAttribute("class","mobile-submenu");
			smenu.setAttribute("OnClick","submenu("+i+")");
			getElm[i].appendChild(smenu);
		};
	};
	submenu = function (i){
		var sub = getElm[i].children[1];
		var b = sub.getAttribute('style');
		if(b){
			sub.removeAttribute('style');
			getElm[i].lastChild.style.backgroundImage='url(images/mobile-expand.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(11, 163, 156, 0.7)';
		} else {
			sub.style.display='block';
			getElm[i].lastChild.style.backgroundImage='url(images/mobile-collapse.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(0,0,0,0.8)';
		}
	};
};


//theme color
var mode = document.getElementById("mode");

mode.addEventListener("click",function(){

    document.body.classList.toggle("darktheme");

    if(document.body.classList.contains("darktheme")){
        mode.src="images/sun.png";
    }

    else{
        mode.src = "images/moon.png";
    }

});

//projects

let presents = [
  'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif',
 'https://media.giphy.com/media/LEcRaYyUptIxG/giphy.gif',
 'https://media.giphy.com/media/3BBv1D4AFbJkY/giphy.gif',
 'https://media.giphy.com/media/13smkcXZiTLDgc/giphy.gif',
 'https://media.giphy.com/media/GknfGjiYhsFQk/giphy.gif',
];

let closedImagePresentUrl = "https://media.giphy.com/media/VIe5NOnlPxJ9FcONBq/giphy.gif"

let presentsContainer = document.querySelector('#presents');
presentsContainer.style.display = 'flex';
presentsContainer.style.justifyContent = 'space-around';
presentsContainer.style.width = '600px';
presentsContainer.style.margin = 'auto';

let header = document.querySelector('#title');

let openedProgress = document.createElement('div');

document.body.append(openedProgress);

let openedPresentsCounter = 0;

presents.forEach(function(url) {
                let present = document.createElement('div'); 
                present.className = 'present';

                presentsContainer.append(present);
 
 

                let img = document.createElement('img');
                img.src = closedImagePresentUrl;
                present.append(img);

              const onPresentClick = function () {
                
                present.removeEventListener('click', onPresentClick);
                openedPresentsCounter += 1;
                openedProgress.innerText = 
                  "You've opened "  +                  
                  openedPresentsCounter +
                  ' present' +
                  (openedPresentsCounter > 1 ? 's' : '');
                
                img.src = url;
                
                if (openedPresentsCounter === presents.length) {
                  header.innerText = 'Enjoy your presents!';
                }
              };

              present.addEventListener('click', onPresentClick);

                });




//contact us

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


//Show input error message
function ShowError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Show input success
function ShowSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Check email
function CheckEmail(input) {
  const char = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (char.test(input.value.trim())) {
    ShowSuccess(input);
  }else {
    ShowError(input, "Email is not valid");
  }
}
function CheckRequired(inputErr) {
  inputErr.forEach(function(input){
    if (input.value.trim() === "") {
      ShowError(input, `${getFieldName(input)} is required`);
    }else {
      ShowSuccess(input);
    }
  });
}

function CheckLenght(input, min, max) {
  if (input.value.length < min) {
    ShowError(input, `${getFieldName(input)} must be at least ${min} characters`);
  }else if(input.value.length > max){
    ShowError(input, `${getFieldName(input)} must be less then ${max} characters`);
  }else {
    ShowSuccess(input);
  }
}


function CheckPasswordsMatch(input1,input2) {
  if (input1.value !== input2.value) {
    ShowError(input2, "Password do not match");
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

form.addEventListener('submit', function(e){
  e.preventDefault();

  CheckRequired([username, email, password, password2 ]);
  CheckLenght(username, 3, 15);
  CheckLenght(password, 8, 25);
  CheckEmail(email);
  CheckPasswordsMatch(password, password2);
});






