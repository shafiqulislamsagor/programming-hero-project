const milestonesData = JSON.parse(data).data;


// load course milestones data

function loadMilestones(){
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = `${milestonesData.map(function(milestones){
        return `<div class="milestone border-b">
        <div class="flex">
            <div class="checkbox"><i class="fa-regular fa-folder"></i></div>
            <div onclick="openMilestone(this,${milestones._id})">
                <p>
                ${milestones.name} 
                <span><i class="fa-solid fa-circle-chevron-down"></i></span></p>
            </div>
        </div>
        <div class="hidden_panel">
            ${milestones.modules.map(function(module){
                return `<div class = "module border-b">
                <p><i class="fa-solid fa-book-journal-whills some"></i>${module.name}</p>
                </div>`;
            }).join('')}
            </div>
        </div>
    </div>`
    }).join('')}`;
}

function openMilestone(milestoneElements, id){
    const currentPanel = milestoneElements.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");

    const active = document.querySelector(".active");

    if (active && !milestoneElements.classList.contains('active')) {
        active.classList.remove('active');
    }

    milestoneElements.classList.toggle('active');

    if(!currentPanel.classList.contains('show') && shownPanel){
        shownPanel.classList.remove('show');
    };

    currentPanel.classList.toggle('show');

    showMilestone(id);
}

function showMilestone(id){
    const milestoneImage = document.querySelector(".milestoneImage");
    const title = document.querySelector(".title");
    const details = document.querySelector(".details");

    milestoneImage.style.opacity = "0" ;
    milestoneImage.src = milestonesData[id].image;
    title.innerText = milestonesData[id].name;
    details.innerText = milestonesData[id].description;
}

const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function(){
    this.style.opacity = "1";
}

loadMilestones();