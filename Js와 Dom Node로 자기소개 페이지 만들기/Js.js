// 전체 컨테이너 생성
const container = document.createElement('div');
document.body.appendChild(container);

// 헤더 섹션
const header = document.createElement('div');
const title = document.createElement('h1');
title.textContent = '손영빈';
const subtitle = document.createElement('p');
subtitle.textContent = '소프트웨어학과';
header.appendChild(title);
header.appendChild(subtitle);
container.appendChild(header);

// 프로필 소개 섹션
const profileSection = document.createElement('div');
const profileText = document.createElement('p');
profileText.textContent = '안녕하세요! 저는 소프트웨어학과 학생회에서 기획부장으로 활동 중인 손영빈입니다. 현재 소프트웨어학과 CS Lab의 부원으로도 활동 중이기도 합니다.';
profileSection.appendChild(profileText);
container.appendChild(profileSection);

// 활동 설명 섹션
const activitySection = document.createElement('div');
const projectText = document.createElement('p');

projectText.textContent = '웹 프로그래밍 수업을 통해 HTML과 CSS 및 Javascript를 접해보고 배워가는 중입니다.';
activitySection.appendChild(projectText);

const volunteerText = document.createElement('p');
volunteerText.textContent = '자바 프로그래밍 수업을 통해 자바의 기초부터 응용까지 탄탄히 다져가는 중입니다..';
activitySection.appendChild(volunteerText);

container.appendChild(activitySection);

// 소셜 링크 섹션
const socialLinks = document.createElement('div');
const githubLink = document.createElement('p');
githubLink.textContent = 'GitHub: https://github.com/ybson0718/WebProgramming';
socialLinks.appendChild(githubLink);

const linkedinLink = document.createElement('p');
linkedinLink.textContent = 'Istagram: https://www.instagram.com/s._.youngbin/';
socialLinks.appendChild(linkedinLink);

const mailLink = document.createElement('p');
mailLink.textContent = 'Mail: ybson0718@naver.com';
socialLinks.appendChild(mailLink);

container.appendChild(socialLinks);

// 푸터 섹션
const footer = document.createElement('div');
const footerText = document.createElement('p');
footerText.textContent = '© 2024 손영빈. All rights reserved.';
footer.appendChild(footerText);
container.appendChild(footer);
