/*  
Copyright 2021 David Daraban

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ 


var navMobile = document.querySelector("#menuToggle");
var sideNav = document.querySelector(".side-navbar-elements");
var isPhone = false;

function mobileNav(){
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i))
    {
    
        isPhone = true;
        navMobile.style.display = "block"
        sideNav.classList.add("hidden");
    }else
    {
        isPhone = false;
        navMobile.style.display = "none";
        sideNav.classList.remove("hidden");
    }

}

mobileNav();

//#region Skill selection
var skills = document.querySelectorAll(".tab-content");
var selectedSkil = "Game-dev";

function showSkill(skillID)
{
    for(i =0; i<skills.length; i++)
    {
        //skills[i].classList.add("hidden");
        skills[i].style.display = "none";
    }
    var temp = document.querySelector("#"+skillID);
    if(temp != null){
        //document.querySelector("#"+skillID).classList.remove("hidden");
        document.querySelector("#"+skillID).style.display="block";
        selectedSkill =  skillID;
    }
}

var skillButtons = document.querySelectorAll(".tablink");
function setActive(event)
{
    for(i =0; i<skillButtons.length; i++)
    {
        skillButtons[i].classList.remove("active");
    }
    event.classList.add("active");
}

showSkill(selectedSkil);

//#endregion


//#region project display
var projects = document.querySelectorAll(".display-project");
function showProject(projectID)
{
    for(i = 0; i<projects.length; i++)
    {
        projects[i].classList.add("hidden");
    }
    var temp = document.querySelector("#"+projectID);
    if(temp != null)
    {
        document.querySelector("#"+projectID).classList.remove("hidden");
        
    }
}

//#endregion