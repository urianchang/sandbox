// Copyright © 2019 Urian

package cmd

import (
	"fmt"
	"github.com/spf13/cobra"
	"os/user"
	"time"
)

// sayhelloCmd represents the sayhello command
var sayhelloCmd = &cobra.Command{
	Use:   "hello",
	Short: "Says hello",
	Long:  `Greets you based on the time of day`,
	Run: func(cmd *cobra.Command, args []string) {
		user, err := user.Current()
		if err != nil {
			panic(err)
		}
		hour := time.Now().Hour()
		greeting := "Good evening"
		if hour >= 6 && hour < 12 {
			greeting = "Good morning"
		}
		if hour >= 12 && hour < 16 {
			greeting = "Good afternoon"
		}
		fmt.Printf("%s, %s\n", greeting, user.Name)
	},
}

func init() {
	sayCmd.AddCommand(sayhelloCmd)
}
