document.getElementById("header-date").innerHTML = Date();

let aboutMePage = document.createElement('p');
aboutMePage.id = 'aboutMePage';
aboutMePage.innerHTML = `
ZGFuZHk100@portfoliowebsite ~ % cd about me
<br>ZGFuZHk100@portfoliowebsite ~ % ls
<br>about-me.txt
<br>ZGFuZHk100@portfoliowebsite ~ % cat about-me.txt
<br>I'm a business man by day and I'm a nerd by night
`;

let gitHubPage = document.createElement('p');
gitHubPage.id = 'gitHubPage';
gitHubPage.innerHTML =`
ZGFuZHk100@portfoliowebsite ~ % cd git hub
<br>ZGFuZHk100@portfoliowebsite ~ % ls
<br>git-hub.txt
<br>ZGFuZHk100@portfoliowebsite ~ % cat git-hub.txt
<br> <a href="https://github.com/ZGFuZHk100" target="_blank">Visit my GitHub page -> https://github.com/ZGFuZHk100</a>
`;

let projectsPage = document.createElement('p');
projectsPage.id = 'projectsPage';
projectsPage.innerHTML = `
ZGFuZHk100@portfoliowebsite ~ % cd projects
<br>ZGFuZHk100@portfoliowebsite ~ % ls
<br>projects.txt
<br>ZGFuZHk100@portfoliowebsite ~ % cat projects.txt
<br>This is my only project so far
<br>Work in progress...
`;

let skillsPage = document.createElement('p');
skillsPage.id = 'skillsPage';
skillsPage.innerHTML = `
ZGFuZHk100@portfoliowebsite ~ % cd skills
<br>ZGFuZHk100@portfoliowebsite ~ % ls
<br>skills.txt
<br>ZGFuZHk100@portfoliowebsite ~ % cat skills.txt
<br>+ HTML          beginner
<br>+ CSS           beginner
<br>+ JavaScript    beginner
<br>+ Python        beginner
`;

let upOneDirectoryLevel = document.createElement('p');
upOneDirectoryLevel.id = 'upOneDirectoryLevel';
upOneDirectoryLevel.innerHTML = `
ZGFuZHk100@portfoliowebsite ~ % cd /
`;

let directoryPositionCheck = 0;
let btAboutMeClicked = false;
let btGitHubClicked = false;
let btProjectsClicked = false;
let btSkillsClicked = false;

let btAboutMe = document.getElementById('btAboutMe');
btAboutMe.onclick = function() {
    if(directoryPositionCheck === 0 && btAboutMeClicked === false) {
        document.body.appendChild(aboutMePage);
    } else if(btAboutMeClicked === false) {
        document.body.appendChild(upOneDirectoryLevel);
        document.body.appendChild(aboutMePage);
    }
    directoryPositionCheck ++;
    btAboutMeClicked = true;
}

let btGitHub = document.getElementById('btGitHub');
btGitHub.onclick = function() {
    if(directoryPositionCheck === 0 && btGitHubClicked === false) {
        document.body.appendChild(gitHubPage);
    } else if(btGitHubClicked === false) {
        document.body.appendChild(upOneDirectoryLevel);
        document.body.appendChild(gitHubPage);
    }
    directoryPositionCheck ++;
    btGitHubClicked = true;
}

let btProjects = document.getElementById('btProjects');
btProjects.onclick = function() {
    if(directoryPositionCheck === 0 && btProjectsClicked === false) {
        document.body.appendChild(projectsPage);
    } else if(btProjectsClicked === false) {
        document.body.appendChild(upOneDirectoryLevel);
        document.body.appendChild(projectsPage);
    }
    directoryPositionCheck ++;
    btProjectsClicked = true;
}

let btSkills = document.getElementById('btSkills');
btSkills.onclick = function() {
    if(directoryPositionCheck === 0 && btSkillsClicked === false) {
        document.body.appendChild(skillsPage);
    } else if(btSkillsClicked === false) {
        document.body.appendChild(upOneDirectoryLevel);
        document.body.appendChild(skillsPage);
    }
    directoryPositionCheck ++;
    btSkillsClicked = true;
}