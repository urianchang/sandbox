package duration

import (
	"fmt"
	"math"
	"time"
)

// HumanTimeFormat returns a representation of a duration for human consumption.
// The function is inspired by these helper functions:
//  * https://github.com/kubernetes/apimachinery/blob/master/pkg/util/duration/duration.go
func HumanTimeFormat(d time.Duration) string {
	seconds := int(d.Seconds())
	if seconds < -1 {
		return "<invalid number of seconds>"
	} else if seconds < 0 {
		return "0s"
	} else if seconds < 60*2 {
		return fmt.Sprintf("%ds", seconds)
	}

	minutes := int(d / time.Minute)
	if minutes < 10 {
		s := int(d/time.Second) % 60
		if s == 0 {
			return fmt.Sprintf("%dm", minutes)
		}
		return fmt.Sprintf("%dm%ds", minutes, s)
	} else if minutes < 60*2 {
		return fmt.Sprintf("%dm", minutes)
	}

	hours := int(d / time.Hour)
	if hours < 12 {
		m := int(d/time.Minute) % 60
		if m == 0 {
			return fmt.Sprintf("%dh", hours)
		}
		return fmt.Sprintf("%dh%dm", hours, m)
	} else if hours < 48 {
		return fmt.Sprintf("%dh", hours)
	} else if hours < 24*8 {
		days := hours / 24
		hs := hours % 24
		if hs == 0 {
			return fmt.Sprintf("%dd", days)
		}
		return fmt.Sprintf("%dd%dh", days, hs)
	} else if hours < 24*365*5 {
		years := hours / 24 / 365
		days := int(hours/24) % 365
		if days == 0 {
			return fmt.Sprintf("%dy", years)
		}
		return fmt.Sprintf("%dy%dd", years, days)
	}
	return fmt.Sprintf("%dy", hours/24/365)
}

// SinceInstant returns a human-readable duration between a Unix timestamp and a more current time.Time value
func SinceInstant(epochSeconds float64, current time.Time) string {
	seconds, decimal := math.Modf(epochSeconds)
	createdTime := time.Unix(int64(seconds), int64(decimal*(1e9)))
	if createdTime.IsZero() {
		return "<unknown>"
	}
	return HumanTimeFormat(current.Sub(createdTime))
}
