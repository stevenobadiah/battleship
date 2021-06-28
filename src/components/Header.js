import React from "react"

function Header() {
  const savedSettings = JSON.parse(window.localStorage.getItem("savedSettings"))
  const gameStatus = window.localStorage.getItem("savedStatus")

  const goToSettings = () => {

    window.localStorage.setItem("savedStatus", "settings");

    if (savedSettings === null) {
      window.location.reload(false);
    } else {
      let tempSettings = { firstName: savedSettings.firstName, age: savedSettings.age, difficulty: savedSettings.difficulty}
      console.log(tempSettings)
      localStorage.setItem("savedSettings", JSON.stringify(tempSettings))
      window.location.reload(false);
    }
  }

  let settingsButton
  if (gameStatus === "settings" || gameStatus === null) {
    settingsButton = ""
  } else {
    settingsButton = <button id="settingsButton" onClick={() => goToSettings()}>Settings</button>
  }

  return (
    <header>
      {settingsButton}
      <h1 className="header-text">Battleship</h1>
    </header>
  )
}

export default Header