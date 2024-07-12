function updateProgressBar(id, percentage) {
    var progressBar = document.getElementById(id);
    progressBar.style.width = percentage + '%';
    progressBar.innerText = percentage + '%';
}

// Example usage: Update progress bars with respective percentages
updateProgressBar('html-progress', 90);
updateProgressBar('css-progress', 80);
updateProgressBar('javascript-progress', 70);
updateProgressBar('php-progress', 80);
updateProgressBar('sql-progress', 90)
updateProgressBar('bootstrap-progress', 60)
updateProgressBar('c-progress', 50)
updateProgressBar('c++-progress', 50)
updateProgressBar('java-progress', 50)
updateProgressBar('python-progress', 50)