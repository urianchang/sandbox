package main

import "fmt"

func fibonacci(n int) int {
	if n == 0 {
		return 0
	} else if n == 1 {
		return 1
	}
	return fibonacci(n-1) + fibonacci(n-2)
}
func main() {
	fmt.Print("Fibonacci number: ")
	var input int
	fmt.Scanf("%d", &input)
	fmt.Println(fibonacci(input))
}
