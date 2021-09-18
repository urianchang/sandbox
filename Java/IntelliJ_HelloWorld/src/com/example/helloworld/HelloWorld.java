package com.example.helloworld;

import java.time.Instant;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Howdy, world!");

        // The Instant class in the Java date time API is an offset since
        // the origin (epoch): 1970-01-01T00:00:00Z.
        // Instants after the epoch have positive values, and earlier instants have negative values.
        Instant nowInstance = Instant.now();

        // An Instant object contains two fields:
        //      * Seconds since the epoch [getEpochSecond()] - long number type
        //      * Nanoseconds (part of the Instant which is less than one second) [getNano()] - integer between 0 and 999_999_999
        System.out.println(String.format(
            "Instant %s -- epoch: %d, nano: %d, milli: %d",
            nowInstance.toString(),
            nowInstance.getEpochSecond(),
            nowInstance.getNano(),
            nowInstance.toEpochMilli()
        ));
        System.out.println(Instant.MIN);
        System.out.println(Instant.MAX);
        System.out.println(Instant.ofEpochMilli(Long.MIN_VALUE));
        System.out.println(Instant.MIN.getEpochSecond());
        System.out.println(Long.MIN_VALUE);
    }
}
