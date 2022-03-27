document.getElementById("header-date").innerHTML = Date();

let about_me = document.createElement('p');
about_me.id = 'about-me';
about_me.innerHTML = `
ZGFuZHk100@portfoliowebsite ~ % cd about me
<br>ZGFuZHk100@portfoliowebsite ~ % ls
<br>about-me.txt
<br>ZGFuZHk100@portfoliowebsite ~ % cat about-me.txt
<br>I'm a business man by day and I'm a nerd by night
`;

let change_log = document.createElement('p');
change_log.id = 'change-log';
change_log.innerHTML =`
ZGFuZHk100@portfoliowebsite ~ % cd change log
<br>ZGFuZHk100@portfoliowebsite ~ % ls
<br>change-log.txt
<br>ZGFuZHk100@portfoliowebsite ~ % cat change-log.txt
<br> No change yet
`;

let git_hub = document.createElement('p');
git_hub.id = 'git-hub';
git_hub.innerHTML =`
ZGFuZHk100@portfoliowebsite ~ % cd git hub
<br>ZGFuZHk100@portfoliowebsite ~ % ls
<br>git-hub.txt
<br>ZGFuZHk100@portfoliowebsite ~ % cat git-hub.txt
<br> <a href="https://github.com/ZGFuZHk100" target="_blank">https://github.com/ZGFuZHk100</a>
`;

let projects = document.createElement('p');
projects.id = 'projects';
projects.innerHTML = `
ZGFuZHk100@portfoliowebsite ~ % cd projects
<br>ZGFuZHk100@portfoliowebsite ~ % ls
<br>projects.txt
<br>ZGFuZHk100@portfoliowebsite ~ % cat projects.txt
<br>No project yet
`;

let skills = document.createElement('p');
skills.id = 'skills';
skills.innerHTML = `
ZGFuZHk100@portfoliowebsite ~ % cd skills
<br>ZGFuZHk100@portfoliowebsite ~ % ls
<br>skills.txt
<br>ZGFuZHk100@portfoliowebsite ~ % cat skills.txt
<br>No skill yet
`;

let upOneDirectoryLevel = document.createElement('p');
upOneDirectoryLevel.id = 'upOneDirectoryLevel';
upOneDirectoryLevel.innerHTML = `
ZGFuZHk100@portfoliowebsite ~ % cd /
`;

let directoryPositionCheck = 0;
let bt_about_me_clicked = false;
let bt_change_log_clicked = false;


let bt_about_me = document.getElementById('bt-about-me');
bt_about_me.onclick = function() {
    if(directoryPositionCheck === 0 && bt_about_me_clicked === false) {
        document.body.appendChild(about_me);
        directoryPositionCheck ++;
        bt_about_me_clicked = true;
    } else if(bt_about_me_clicked === false) {
        document.body.appendChild(upOneDirectoryLevel);
        document.body.appendChild(about_me);
        bt_about_me_clicked = true;
    }
}

let bt_change_log = document.getElementById('bt-change-log');
bt_change_log.onclick = function() {
    if(directoryPositionCheck === 0 && bt_change_log_clicked === false) {
        document.body.appendChild(change_log);
        directoryPositionCheck ++;
        bt_change_log_clicked = true;
    } else if(bt_change_log_clicked === false) {
        document.body.appendChild(upOneDirectoryLevel);
        document.body.appendChild(change_log);
        bt_change_log_clicked = true;
    }
}