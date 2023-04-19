package duration

import (
	"fmt"
	"testing"
	"time"
)

func TestHumanTimeFormat(t *testing.T) {
	tests := []struct {
		dur    time.Duration
		expect string
	}{
		// seconds
		{dur: -2 * time.Second, expect: "<invalid number of seconds>"},
		{dur: -1 * time.Second, expect: "0s"},
		{dur: 24 * time.Second, expect: "24s"},
		// minutes
		{dur: 5 * time.Minute, expect: "5m"},
		{dur: 8*time.Minute + 24*time.Second, expect: "8m24s"},
		{dur: 75 * time.Minute, expect: "75m"},
		// hours
		{dur: 8 * time.Hour, expect: "8h"},
		{dur: 10*time.Hour + 10*time.Minute + 10*time.Second, expect: "10h10m"},
		{dur: 36*time.Hour + 24*time.Minute, expect: "36h"},
		// days
		{dur: 3 * 24 * time.Hour, expect: "3d"},
		{dur: 5*24*time.Hour + 2*time.Hour, expect: "5d2h"},
		// years
		{dur: 24 * 365 * time.Hour, expect: "1y"},
		{dur: 2*24*365*time.Hour + 10*24*time.Hour, expect: "2y10d"},
		{dur: 100*24*365*time.Hour + 10*24*time.Hour, expect: "100y"},
	}
	for _, tc := range tests {
		t.Run(tc.dur.String(), func(t *testing.T) {
			if received := HumanTimeFormat(tc.dur); received != tc.expect {
				t.Errorf("HumanTimeFormat() = %v, expect %v", received, tc.expect)
			}
		})
	}
}

func TestSinceInstant(t *testing.T) {
	var epochStart = time.Date(1, 1, 1, 0, 0, 0, 0, time.UTC).Unix()
	var aTime = time.Date(2021, 4, 12, 0, 0, 0, 0, time.UTC)

	tests := []struct {
		expect    string
		timeBegin float64
		timeEnd   time.Time
	}{
		// time.IsZero == true
		{expect: "<unknown>", timeBegin: float64(epochStart), timeEnd: aTime},
		{expect: "24h", timeBegin: float64(aTime.Unix()), timeEnd: aTime.AddDate(0, 0, 1)},
	}
	for _, tc := range tests {
		t.Run(fmt.Sprintf("start: %f | end: %s", tc.timeBegin, tc.timeEnd.String()), func(t *testing.T) {
			if received := SinceInstant(tc.timeBegin, tc.timeEnd); received != tc.expect {
				t.Errorf("TestSinceInstant() = %v, expect %v", received, tc.expect)
			}
		})
	}
}
