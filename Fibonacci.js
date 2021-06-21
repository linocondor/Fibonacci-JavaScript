
fb_sequence = [];
count = 2;
function Fibonacci_sequence(n) {

    if (n === 1) {
        fb_sequence[0] = 0;
    } else if (n === 2) {
        fb_sequence = [0, 1];
    } else {
        fb_sequence = [0, 1];
        for (i = 2; i < n; i++) {
            fb_sequence.push(fb_sequence[count - 2] + fb_sequence[count - 1]);
            count++;

        }
    };
    console.log(fb_sequence);
};

Fibonacci_sequence(5);