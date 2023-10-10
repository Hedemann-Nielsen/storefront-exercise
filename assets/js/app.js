
import {getProductCategories} from "./modules/model/dummyjasonLib.js";


let categoriesDisplayElement= document.getElementById('categoriesNav');
//let productDisplayElement= document.getElementById('productDisplay');

initApp();

let categoriesNavigation = '';

function initApp(){
// just to get things started ... happy coding :)

    getProductCategories().then((categories)=>{
       
       categories.forEach((categories) => {
            categoriesNavigation += `
                <li><a href="">${categories}</a></li>
            `;
        categoriesDisplayElement.innerHTML = `
        <ul> ${categoriesNavigation}</ul>
        `; 
       });
    }); 
}



// callBack functions remember hoisting to window eks: window._viewCallBacks = { categoriesCallBack,productCardCallback};

