var data = [
    {"id": "GsdSqBPV85Q", "title": "Introduction to Chest", "description": "", "category": "Chest"}
]

var root = document.getElementById('root');
data.forEach(element => root.insertAdjacentHTML('beforebegin', `<tr><td>https://img.youtube.com/vi/${element.id}/hqdefault.jpg</td><td><div class="column"><h3>${title}</h3><p class="category">${category}</p><p>${description}</p></div></td></tr>`));
//data.forEach(element => root.insertAdjacentHTML('beforebegin', `<tr><td>${element.id}</td><td>${title}</td></tr>`));