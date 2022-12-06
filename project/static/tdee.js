
        
function getbmr(gender, age, weight, height, activity) {
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var activity = document.getElementById("activity").value;
    sum1 = (( parseInt(gender) + (10 * parseInt(weight) + 6.25 * parseInt(height) - 5 * parseInt(age)))* parseFloat(activity));  
    return sum1 
}

