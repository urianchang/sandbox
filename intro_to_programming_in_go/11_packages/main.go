package main

import "fmt"
import m "./math"

func main() {
    xs := []float64{1, 2, 3, 4}
    fmt.Println(m.Average(xs))
    fmt.Println(m.Min(xs))
    fmt.Println(m.Max(xs))
}
