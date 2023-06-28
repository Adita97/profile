const darkModeSwitch = document.getElementById("switch")
const darkMode = document.getElementById("darkMode")
const body = document.body
const darkBulb = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-lightbulb-fill' viewBox='0 0 16 16'><path d='M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z'/></svg>";
const lightBulb = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-lightbulb' viewBox='0 0 16 16'><path d='M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z'/></svg>";
const navbar = document.getElementById("navClass")

/* Switch between dark and light mode event listener*/
darkModeSwitch.addEventListener('click', function() {
if(darkMode.classList.contains('lightbulbL')) {
        darkMode.classList.toggle('lightbulbL');
        darkMode.classList.toggle('lightbulbdark');
        body.style.backgroundColor ="black";
        body.style.color="white"


} else {
    darkMode.classList.toggle('lightbulbL');
    darkMode.classList.toggle('lightbulbdark');
    body.style.backgroundColor ="white"
    body.style.color="black"
}
})

const projects = document.getElementById("projects");
const projectsArray = ["SimonGameChallenge","DrumKit","RandomMovieGenerator"]

projectsArray.forEach(elm => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col-md-4", "text-center" , "my-3", "project-image")
    newDiv.innerText = elm;
    newDiv.textContent = elm.replace(/([A-Z])/g, ' $1').trim();
    const link = document.createElement("a")
    link.setAttribute("href", elm + "/" + "index.html")
    const image = document.createElement("img");
    image.setAttribute("src", "img/" + elm + ".jpg");
    image.setAttribute("style", "height='300px'")
    image.classList.add("img-fluid", "mx-auto", "my-4", "py-1", "border", "border-light")


        newDiv.appendChild(link);
        link.appendChild(image)
    projects.appendChild(newDiv);
});



