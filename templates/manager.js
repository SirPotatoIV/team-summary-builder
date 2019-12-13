// <!-- * In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends. -->

const manager = `<div class = "card">
    <div class = "header">
        <div class = "name">${name}</div>
        <div class = "title">${role}</div>
    </div>
    <div>${id}</div>
    <div>Email: ${email}</div>
    <div>School: ${school}</div>
</div>`

module.exports = manager;