package main

import (
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"

	"github.com/urianchang/sandbox/humanize/pkg/duration"
)

func main() {
	router := gin.Default()
	router.GET("/humanize/:seconds", humanizeSeconds)

	router.Run("localhost:8081")
}

func humanizeSeconds(c *gin.Context) {
	secondsString := c.Param("seconds")
	seconds, err := strconv.Atoi(secondsString)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"message": "Only integers are accepted"})
	}

	humanized := duration.HumanTimeFormat(time.Duration(seconds) * time.Second)
	c.IndentedJSON(http.StatusOK, gin.H{"message": humanized})
}
