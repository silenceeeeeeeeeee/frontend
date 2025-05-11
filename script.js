let educationCoefficient = null;
let networthCoefficient = null;
let casteScore = null;
let skillsScore = 0; 
let ageCoefficient = null;  
let reputationCoefficient = 1;
let reputationScore = 0;
let priceHistory = [];

document.getElementById("changecolor").addEventListener("click", changeBackground);

const educationCoefficients = {
    "bachelor": 1.5,
    "college": 1.2,
    "high_school": 1.05,
    "middle_school": 0.9
};

const networthCoefficients = {
    "upper_class": 2,
    "middle_class": 1.5,
    "lower_class": 1.2
};

const casteScores = {
    "brahmin": 100,
    "kshatriya": 50,
    "vaishya": 20,
    "shudra": 10
};

const ageCoefficients = {
    "18_23": 1.5,
    "24_27": 1.2,
    "28_plus": 0.95
};

function calculateEducation() {
    let selected = document.getElementById("education").value;
    educationCoefficient = educationCoefficients[selected];
}

function calculateNetworth() {
    let selected = document.getElementById("networth").value;
    networthCoefficient = networthCoefficients[selected];
}

function calculateCaste() {
    let selected = document.getElementById("caste").value;
    casteScore = casteScores[selected];
}

function calculateAge() {
    let selected = document.querySelector('input[name="age"]:checked').value;
    ageCoefficient = ageCoefficients[selected];
}

function calculateSkills() {
    if (document.getElementById("musical_instrument").checked) {
        skillsScore += 10;
    }
    if (document.getElementById("good_cook").checked) {
        skillsScore += 20;
    }
    if (document.getElementById("easygoing_character").checked) {
        skillsScore += 15;
    }
    if (document.getElementById("sings_well").checked) {
        skillsScore += 10;
    }
}

function calculateReputation() {
    if (document.getElementById("parents_attitude").checked) {
    reputationCoefficient += 0.85;
    }
    if (document.getElementById("character_gossip").checked) {
    reputationCoefficient += 0.9;
    }
    if (document.getElementById("general_gossips").checked) {
    reputationScore -= 20;
    }
}

function displayTotal() {
    if (educationCoefficient == null || networthCoefficient == null || casteScore == null || ageCoefficient == null) {
        alert("Please select education, networth, caste and age options.");
        return;
    }
    let totalPrice = (100 + skillsScore + casteScore + reputationScore) * educationCoefficient * networthCoefficient * ageCoefficient * reputationCoefficient;
    priceHistory.push("$" + totalPrice.toFixed(2));
    document.getElementById("totalPrice").innerText = "$" + totalPrice.toFixed(2);
}

function displayPriceHistory() {
    if (priceHistory == null) {
        alert("You dont have price history yet.");
        return;
    }
    document.getElementById("priceHistory").innerText = priceHistory;
    console.log(priceHistory);
}

function resetForm() {
    document.getElementById("education").selectedIndex = -1;
    document.getElementById("networth").selectedIndex = -1;
    document.getElementById("caste").selectedIndex = -1;
    document.getElementById("musical_instrument").checked = false;
    document.getElementById("good_cook").checked = false;
    document.getElementById("easygoing_character").checked = false;
    document.getElementById("sings_well").checked = false;
    document.getElementById("parents_attitude").checked = false;
    document.getElementById("character_gossip").checked = false;
    document.getElementById("general_gossips").checked = false;
    let ageRadioButtons = document.querySelectorAll('input[name="age"]');
    ageRadioButtons.forEach(radio => radio.checked = false);
    document.getElementById("totalPrice").innerText = "";
    document.getElementById("priceHistory").innerText = "";
    educationCoefficient = null;
    networthCoefficient = null;
    casteScore = null;
    skillsScore = 0; 
    ageCoefficient = null;  
    reputationCoefficient = 1;
    reputationScore = 0;
}

function changeBackground() {
    document.body.style.backgroundColor = "#3b3b3b";
    let element = document.getElementById("colorbox");
    let dropdown1 = document.getElementById("education");
    let dropdown2 = document.getElementById("networth");
    let dropdown3 = document.getElementById("caste");
    element.style.backgroundColor = "#3b3b3b";
    dropdown1.style.backgroundColor = "#3b3b3b";
    dropdown1.style.color = "white";
    dropdown2.style.backgroundColor = "#3b3b3b";
    dropdown2.style.color = "white";
    dropdown3.style.backgroundColor = "#3b3b3b";
    dropdown3.style.color = "white";
    element.classList.remove("bg-white");
    element.classList.add("text-white");
}