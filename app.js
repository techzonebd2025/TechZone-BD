
// Basic functions
function copyStylish() {
    const output = document.getElementById('stylishOutput').innerText;
    navigator.clipboard.writeText(output);
    document.getElementById('copyMsgStylish').style.display = 'inline';
    setTimeout(() => document.getElementById('copyMsgStylish').style.display = 'none', 2000);
}

function copyBio() {
    const bio = document.getElementById('bioText').innerText;
    navigator.clipboard.writeText(bio);
    document.getElementById('copyMsgBio').style.display = 'inline';
    setTimeout(() => document.getElementById('copyMsgBio').style.display = 'none', 2000);
}
