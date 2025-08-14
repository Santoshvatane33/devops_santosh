// Load Git commits
fetch('data/git-log.json')
  .then(res => res.json())
  .then(data => {
    const log = document.getElementById('git-log');
    data.forEach(commit => {
      const li = document.createElement('li');
      li.textContent = `${commit.hash} - ${commit.message}`;
      log.appendChild(li);
    });
  });

// Load Jenkins status
fetch('data/jenkins-status.json')
  .then(res => res.json())
  .then(data => {
    const info = document.getElementById('jenkins-info');
    info.textContent = `Last build: ${data.lastBuild} | Status: ${data.status}`;
  });

// Load study material
fetch('data/study-material.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('material-list');
    data.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
      list.appendChild(li);
    });
  });
