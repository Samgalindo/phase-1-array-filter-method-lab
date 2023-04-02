// Code your solution here

function findMatching(drivers, name){
    return drivers.filter(drivers => drivers.toLowerCase()=== name.toLowerCase())
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.slice(0, letters.length).toLowerCase()=== letters.toLowerCase())
}

function matchName(drivers, targetName){
    return drivers.filter(driver => driver.name === targetName)
}