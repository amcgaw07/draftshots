{
  // Global variables
  const players = [
    "Tyreek Hill",
    "Trevor Lawrence",
    "Travis Kelce",
    "Travis Etienne Jr.",
    "Tony Pollard",
    "Terry McLaurin",
    "Tee Higgins",
    "T.J. Hockenson",
    "Stefon Diggs",
    "Saquon Barkley",
    "Rhamondre Stevenson",
    "Patrick Mahomes II",
    "Nick Chubb",
    "Najee Harris",
    "Miles Sanders",
    "Mike Williams",
    "Mark Andrews",
    "Lamar Jackson",
    "Kyle Pitts",
    "Kenneth Walker III",
    "Keenan Allen",
    "Justin Jefferson",
    "Justin Herbert",
    "Justin Fields",
    "Josh Jacobs",
    "Josh Allen",
    "Jonathan Taylor",
    "Joe Mixon",
    "Joe Burrow",
    "Jerry Jeudy",
    "Jaylen Waddle",
    "Jalen Hurts",
    "Jahmyr Gibbs",
    "Ja'Marr Chase",
    "George Kittle",
    "Garrett Wilson",
    "Derrick Henry",
    "Deebo Samuel",
    "DeVonta Smith",
    "DeAndre Hopkins",
    "Davante Adams",
    "Darren Waller",
    "Dameon Pierce",
    "Dallas Goedert",
    "DK Metcalf",
    "DJ Moore",
    "Cooper Kupp",
    "Christian Watson",
    "Christian McCaffrey",
    "Chris Olave",
    "CeeDee Lamb",
    "Calvin Ridley",
    "Breece Hall",
    "Bijan Robinson",
    "Austin Ekeler",
    "Amon-Ra St. Brown",
    "Amari Cooper",
    "Alvin Kamara",
    "Aaron Jones",
    "A.J. Brown",
  ];

  let randomList = [];

  const audio = new Audio("audio/nfl.mp3");
  const win = new Audio("audio/win.mp3");

  //get a random chunk of players from the list. num value will be how many are taken
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    //console.log(shuffled);
    return shuffled.slice(0, num);
  }

  //setup random list and dropdown menu
  function setup() {
    randomList = getMultipleRandom(players, 15);

    //populate dropdown
    var select = document.getElementById("floatingPassword");
    for (i in players) {
      var option = document.createElement("option");
      option.text = option.value = players[i];
      select.add(option, 0);
    }
  }
  // Main Functionality
  function shot() {
    console.log(randomList);
    const drafted = document
      .getElementById("floatingPassword")
      .value.toUpperCase();
    let flag = false;
    for (i in randomList) {
      const player = randomList[i];
      // if player matches one of the random 15, break out of loop
      if (player.toUpperCase() == drafted) {
        flag = true;
        break;
      }
    }
    // helper function to update background
    updatebg(flag);
  }

  //add background based on whether or not the selected player was chosen
  function updatebg(flag) {
    if (flag) {
      //add the take a shot
      document.getElementById("body").classList.remove("safebg");
      document.getElementById("body").classList.add("shotbg");

      //show the marquee images
      document.getElementById("m1").style.visibility = "visible";
      document.getElementById("m2").style.visibility = "visible";
      audio.play();
    } else {
      //add the non shot bg
      document.getElementById("body").classList.remove("shotbg");
      document.getElementById("body").classList.add("safebg");
      // hide the marquee images
      document.getElementById("m1").style.visibility = "hidden";
      document.getElementById("m2").style.visibility = "hidden";

      //play win noise stop other sounds
      win.play();
      audio.pause();
      audio.currentTime = 0;
    }
  }
}
