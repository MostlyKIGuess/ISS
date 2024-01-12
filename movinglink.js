  var link = document.getElementById('moving-link');
    var moveCount = 0;
    var maxMoveCount = 10; // change this to set how many times the link can move

    link.addEventListener('mouseover', function() {
        if (moveCount >= maxMoveCount) return;

        var x = Math.random() * (window.innerWidth - link.offsetWidth);
        var y = Math.random() * (window.innerHeight - link.offsetHeight);

        link.style.position = 'absolute';
        link.style.left = x + 'px';
        link.style.top = y + 'px';

        moveCount++;
    });
