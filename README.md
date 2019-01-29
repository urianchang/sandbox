# Java Notes


## Primitive Data Types
There are eight primitive data types supported by the Java programming language:

1. __byte__: 8-bit signed two's complement integer. Minimum value of -128 and a
   maximum value of 127 (inclusive). Can be useful for saving memory in large
   arrays. Can also be used in place of `int` where their limits help clarify
   code.
2. __short__: 16-bit signed twos' complement integer. Minimum value of -32,768
   (2^15) and a maximum value of 32,767 (2^15 - 1) (inclusive).
3. __int__: 32-bit signed two's complement integer. Minimum value of -2^31 and
   a maximum value of 2^31 - 1. In Java SE 8 and later, you can use `int` to
   represent an unsigned 32-bit integer, which has a minimum value of 0 and a
   maximum value of 2^32 - 1.
4. __long__: 64-bit two's complement integer. The signed long has a minimum
   value of -2^63 and a maximum value of 2^63 - 1. Used when you need a range of
   values wider than those provided by `int`. Class also contains arithmetic
   operations for unsigned long.
5. __float__: Single-precision 32-bit IEEE 754 floating point. Should never be
   used for precise values, such as currency. For that, use the
   `java.math.BigDecimal` class instead.
6. __double__: Double-precision 64-bit IEEE 754 floating point. For decimal
   values, this data type is generally the default choice. Should never be used
   for precise values, such as currency.
7. __boolean__: Has only two possible values: `true` and `false`. Used to track
   true/false conditions. Represents one bit of information, but its "size" is
   not precisely defined.
8. __char__: Single 16-bit Unicode character. Minimum value of '\u0000' (or 0)
   and a maximum value of '\uffff' (or 65,535 inclusive).  

### Default Values
| Data Type              | Default Value (for fields) |
| ---------------------- | -------------------------- |
| byte                   | 0                          |
| short                  | 0                          |
| int                    | 0                          |
| long                   | 0L                         |
| float                  | 0.0f                       |
| double                 | 0.0d                       |
| char                   | '\u0000'                   |
| String (or any object) | null                       |
| boolean                | false                      |

__Reference__:
* [Oracle docs](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)


## Arrays
An array declaration has two components: array's type and array's name. Type is
written as _type[]_, where _type_ is the data type of the contained elements;
the brackets are special symbols indicating that this variable holds an array.
Size of the array is not part of its type.

One way of creating an array is with the `new` operator.

```
// create an array of integers
anArray = new int[10];
```

Or use the shortcut syntax:

```
int[] anArray = {
    100, 200, 300,
    400, 500, 600,
    700, 800, 900, 1000
};
```

You can also declare a multidimensional array by using two or more sets of
brackets (e.g. `String[][]`).

### Copying arrays
The `System` class has an `arraycopy` method for efficiently copying data from
one array into another.

```
char[] copyFrom = { 'd', 'e', 'c', 'a', 'f', 'f', 'e',
                    'i', 'n', 'a', 't', 'e', 'd' };
char[] copyTo = new char[7];

System.arraycopy(copyFrom, 2, copyTo, 0, 7);
```

__Reference__:
* [Oracle docs](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)


## Static Initialization Blocks
A static initialization block is a normal block of code enclosed in braces and
preceded by the `static` keyword.

```
static {
    // whatever code is needed for initialization goes here
}
```

A class can have number of initialization
blocks, and they can appear anywhere in the class body. The runtime system
guarantees that static initialization blocks are called in the order that they
appear in the source code.

__Reference__:
* [Oracle docs](https://docs.oracle.com/javase/tutorial/java/javaOO/initial.html)


## Further Reading
* [Oracle Java tutorial](https://docs.oracle.com/javase/tutorial/java/TOC.html)
