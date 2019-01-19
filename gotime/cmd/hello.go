// Copyright © 2019 Urian

package cmd

import (
	"fmt"
	"github.com/spf13/cobra"
	"os/user"
	"time"
)

// helloCmd represents the hello command
var helloCmd = &cobra.Command{
	Use:   "hello",
	Short: "Says hello",
	Long:  `Greeting is based on the time of day`,
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
	rootCmd.AddCommand(helloCmd)
}
