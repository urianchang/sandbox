package main

import "fmt"

func main() {
  // elements := make(map[string]string)
  //
  // elements["H"] = "Hydrogen"
  // elements["He"] = "Helium"
  // elements["Li"] = "Lithium"
  // elements["Be"] = "Beryllium"
  // elements["B"] = "Boron"
  // elements["C"] = "Carbon"
  // elements["N"] = "Nitrogen"
  // elements["O"] = "Oxygen"
  // elements["F"] = "Fluorine"
  // elements["Ne"] = "Neon"

  //: Faster ways of creating maps
  elements := map[string]string{
    "H": "Hydrogen",
    "He": "Helium",
    "Li": "Lithium",
    "Be": "Beryllium",
    "B": "Boron",
    "C": "Carbon",
    "N": "Nitrogen",
    "O": "Oxygen",
    "F": "Fluorine",
    "Ne": "Neon",
  }

  fmt.Println(elements["Li"])

  //: Returns zero value for key that doesn't exist
  fmt.Println(elements["Um"])

  //: Check if element exists -> returns value, Boolean
  name, ok := elements["Un"]
  fmt.Println(name, ok)

  //: First try to get value from map, then if successful, run code block
  if name, ok := elements["Um"]; ok {
    fmt.Println(name, ok)
  }


}
