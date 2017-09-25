package main

import "fmt"

func main() {
  //: Ask user for Fahrenheit measurement
  fmt.Println("Enter Fahrenheit: ")
  var fahrenheit float64
  fmt.Scanf("%f", &fahrenheit)

  celsius := (fahrenheit - 32) * 5 / 9

  fmt.Println(celsius)

}
