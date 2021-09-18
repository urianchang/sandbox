package main

import (
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	"github.com/theckman/yacspin"
)

const LogFile = "/Users/urianchang/go/src/github.com/urianchang/LearnGo/internal/playground/cmd_spinner_with_logs/spin.log"

var log *logrus.Logger
var logFile *os.File

type SimpleFormatter struct{}

func (f *SimpleFormatter) Format(entry *logrus.Entry) ([]byte, error) {
	level := strings.ToUpper(entry.Level.String())
	timestamp := entry.Time.Format(time.RFC3339)
	return []byte(fmt.Sprintf("%s[%s] %s\n", level, timestamp, entry.Message)), nil
}

func init() {
	log = logrus.New()
	log.SetLevel(logrus.DebugLevel)
	log.SetFormatter(&SimpleFormatter{})
}

func main() {
	Execute()
}

func Execute() {
	if err := NewRootCmd().Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func NewRootCmd() *cobra.Command {
	var seconds int

	var rootCmd = &cobra.Command{
		Use:   "logspin",
		Short: "Display a spinner while logging messages in the background",
		Long:  `Command for testing a command that displays a spinner while logging messages in the background`,
		RunE: func(cmd *cobra.Command, args []string) error {
			// Setting up the spinner
			cfg := yacspin.Config{
				Frequency:         100 * time.Millisecond,
				CharSet:           yacspin.CharSets[59],
				Suffix:            " Task 1",
				SuffixAutoColon:   true,
				StopCharacter:     "✓",
				StopColors:        []string{"fgGreen"},
				StopFailCharacter: "✗",
				StopFailColors:    []string{"fgRed"},
				Writer:            cmd.OutOrStdout(),
			}
			spinner, _ := yacspin.New(cfg)
			_ = spinner.Start()

			for i := 0; i < seconds; i++ {
				spinner.Message("waiting")
				log.Info("waiting")
				log.Debugf("second: %d", i)
				time.Sleep(1 * time.Second)
			}

			_ = spinner.Stop()
			return nil
		},
		PersistentPreRun: func(cmd *cobra.Command, args []string) {
			logFile, _ = os.OpenFile(LogFile, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0600)
			log.SetOutput(logFile)
			logrus.RegisterExitHandler(closeLogFile)
		},
		PersistentPostRun: func(cmd *cobra.Command, args []string) {
			logrus.Exit(0)
		},
		SilenceUsage: true,
	}

	rootCmd.Flags().IntVarP(&seconds, "seconds", "s", 1, "Number of seconds to run")
	return rootCmd
}

func closeLogFile() {
	if logFile != nil {
		logFile.Close()
	}
}
