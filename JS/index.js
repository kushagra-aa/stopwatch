function Stopwatch() {
    let running;
    let interval = null;
    let msec = 0,
        sec = 0,
        min = 0,
        hr = 0;
    let Dmsec = 0,
        Dsec = 0,
        Dmin = 0,
        Dhr = 0;

    stopWatchF = function () {

        msec++;

        if (msec / 1000 == 1) {
            msec = 0;
            sec++;
            if (sec / 60 == 1) {
                sec = 0;
                min++;
                if (min / 60 == 1) {
                    min = 0;
                    hr++;
                }
            }
        }

        if (msec < 10)
            Dmsec = "000" + msec.toString();
        else {
            if (msec < 100)
                Dmsec = "00" + msec.toString();


            else {
                if (msec < 1000)
                    Dmsec = "0" + msec.toString();
            }
        }
        //     }
        // }

        if (sec < 10) Dsec = "0" + sec.toString();

        if (min < 10) Dmin = "0" + min.toString();

        if (hr < 10) Dhr = "0" + hr.toString();

        document.getElementById("time").innerHTML = Dhr + ":" + Dmin + ":" + Dsec + ":" + Dmsec;
    };

    this.start = function () {
        if (running) {
            alert("Stopwatch has already started!");

            throw new Error("Stopwatch has already started!");
        }

        // console.log("Stopwatch Started");
        running = true;

        interval = window.setInterval(stopWatchF, 1);
    };

    this.stop = function () {
        if (!running) {
            alert("Stopwatch Has Not Started!!");
            throw new Error("Stopwatch Has Not Started!!");
        }

        running = false;

        window.clearInterval(interval);
    };

    this.reset = function () {
        running = false;
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementById("time").innerHTML = "00:00:00:0000";

        window.clearInterval(interval);
    };

}

let sbtn = document.getElementById("start");
let ssbtn = document.getElementById("stop");
let rbtn = document.getElementById("r");

const sw = new Stopwatch();

go = function () {
    sw.start();
    ssbtn.disabled = false;
    rbtn.disabled = false;
    sbtn.disabled = true;
};

no = function () {
    sw.stop();

    sbtn.disabled = false;
    ssbtn.disabled = true;

};

re = function () {
    sw.reset();
    sbtn.disabled = false;
    ssbtn.disabled = true;
    rbtn.disabled = true;

};
