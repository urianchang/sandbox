package main

import "fmt"

func main() {
  //: To declare multiple variables...
  // var (
  //   a = 5
  //   b = 10
  //   c = 15
  // )

  //: Example of program that takes a number entered by user and modifies it
  fmt.Print("Enter an integer: ")
  var input float64
  fmt.Scanf("%f", &input)

  output := input * 2

  fmt.Println(output)

}
