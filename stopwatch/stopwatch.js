function Stopwatch() {
    let startTime, endTime, duration, running = 0;
    this.start = function() {
        if (running) return 'Timer is already running';
        
        running = true;
        startTime = new Date();
    };

    this.end = function() {
        if (!running) return 'Time is already stopped';

        running = false;
        endTime = new Date();
    };

    this.reset = function() {
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return ((endTime - startTime)/1000).toFixed(2);
        }
    });
}

let timer = new Stopwatch();
let running = false;

function run() {
    document.getElementById('sec').innerHTML = setInterval(timer.duration);
}

/*function stop() {
    timer.end();
    document.getElementById('sec').innerHTML = timer.duration;
}

function resetWatch(){
    document.getElementById('sec').innerHTML = 00;
}*/

function main() {
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    //let time = setInterval(timer.duration);

    start.addEventListener('click', () => setInterval(run, 1000));
    stop.addEventListener('click', () => console.log('stop clicked'));
    reset.addEventListener('click', () => console.log('reset clicked'));

    
    //document.getElementById('sec').innerHTML = time;
    
    
}

main();
//setInterval(main, 1000);


