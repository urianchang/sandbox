// Copyright © 2019 Urian

package cmd

import (
	"errors"
	"github.com/spf13/cobra"
)

// sayCmd represents the say command
var sayCmd = &cobra.Command{
	Use:   "say",
	Short: "Says something",
	Long:  `Echoes your input`,
	RunE: func(cmd *cobra.Command, args []string) error {
		return errors.New("Provide input for the say command")
	},
}

func init() {
	rootCmd.AddCommand(sayCmd)
}
