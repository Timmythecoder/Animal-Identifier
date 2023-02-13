function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true

    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WHTHdiZBO/model.json", modelloaded);
}
function modelloaded() {
    console.log("modelloaded!")
    classifier.classify(gotresults);
};
function gotresults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("label").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = Math.floor(results[0].confidence * 100)+"%";
        var img = document.getElementById("ear");
        var label = results[0].label;
        if (label == "Dog") {
            img.src = "d.jpg";
        }
        if (label == "Cat") {
            img.src = "c.jpg"
        }
    }

}