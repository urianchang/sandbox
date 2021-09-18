package cmd

import (
	"fmt"
	"strconv"
	"time"

	"github.com/spf13/cobra"
)

func init() {
	rootCmd.AddCommand(parseCmd)
}

// parseCmd represents the parse command
var parseCmd = &cobra.Command{
	Use:   "parse",
	Args:  cobra.MinimumNArgs(1),
	Short: "Parse epoch time",
	Long: `Parses an epoch time value in seconds to a specified time zone. The
default time zone is local.`,
	Run: func(cmd *cobra.Command, args []string) {
		var epochSec, err = strconv.ParseInt(args[0], 10, 64)
		if err != nil {
			fmt.Println("Unable to parse input")
		}

		var localTime = time.Unix(epochSec, 0)
		if len(args) == 2 {
			zone := args[1]
			loc, err := time.LoadLocation(zone)
			if err != nil {
				fmt.Printf("%s is not a supported time zone\n", zone)
			} else {
				fmt.Println(localTime.In(loc))
			}
		} else {
			fmt.Println(localTime)
		}
	},
}
