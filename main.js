var members = [
    "https://jerrymahoney.files.wordpress.com/2013/06/familybook.png", 
    "https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Brother-512.png", 
    "https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Brother-512.png", 
    "https://image.shutterstock.com/image-vector/young-man-head-avatar-character-260nw-741858571.jpg", 
    "https://www.clipartkey.com/mpngs/m/145-1456201_female-using-smartphone-mom-and-baby-cartoon-png.png", 
    ];

    var names = [
    "My Family-Book", 
    "Savya Sarda", 
    "Savir Sarda", 
    "Ritesh Sarda", 
    "Ritu Awasthi", 
    ];

    var count = 0;

    function nextslide () {

    document.getElementById("members").src = members[count];

    document.getElementById("names").innerHTML = names[count];
    
    count++;

    if (count == 5) {
    
    count = 0;

    }

    }