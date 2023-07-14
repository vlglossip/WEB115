document.getElementById('submit').addEventListener('click',myWindow)
function myWindow() {
        mealPlan = document.getElementById("mealPlan").outerHTML;
        style = document.head.innerHTML;
    
        flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
        banner = "<div style=\"text-align:center\"><img src=\"banner.png\" width=\"250\" height=\"250\" alt=\"Description of the image\"></div>"
        flyWindow.document.write(banner);
        inputName = document.getElementById("name").value
        inputEmail = document.getElementById("email").value
        inputGoal = document.getElementById("goal").value
        intro = ("<br/>Name: " + inputName + "<br/>" + "Email: " + inputEmail + "<br/>" + "This Week's Goal: " + inputGoal)
        flyWindow.document.write(intro);
        flyWindow.document.write(mealPlan);
        flyWindow.document.head.innerHTML = style;

}

document.getElementById('clearAll').addEventListener('click',clear)
function clear() {
    const inputElement = document.getElementById('inputValue');
    inputElement.value = '';

    }