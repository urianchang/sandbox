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


## Control Flow Statements
The decision-making statements (`if-then`, `if-then-else`, `switch`), the
looping statements (`for`, `while`, `do-while`), and the branching statements
(`break`, `continue`, `return`).

### if-then-else Statement

```
class IfElseDemo {
    public static void main(String[] args) {

        int testscore = 76;
        char grade;

        if (testscore >= 90) {
            grade = 'A';
        } else if (testscore >= 80) {
            grade = 'B';
        } else if (testscore >= 70) {
            grade = 'C';
        } else if (testscore >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        System.out.println("Grade = " + grade);
    }
}
```

The opening and closing braces are optional, provided that the "then" clause
contains only one statement.

```
void applyBrakes() {
    // same as above, but without braces
    if (isMoving)
        currentSpeed--;
}
```

### switch Statement
A statement in the `switch` block can be labeled with one or more `case` or
`default` labels. The `switch` statement evaluates its expression, then executes
all statements that follow the matching `case` label.

Deciding whether to use `if-then-else` statements or a `switch` statement is
based on readability and the expression that the statement is testing. An
`if-then-else` statement can test expressions based on ranges of values or
conditions, whereas a `switch` statement tests expressions based only on a
single integer, enumerated value, or `String` object.

`break` statements are necessary because without them, statements in `switch`
blocks _fall through_: All statements after the matching `case` label are
executed in sequence, regardless of the expression of subsequent `case` labels,
until a `break` statement is encountered.

The `default` section handles all values that are not explicitly handled by one
of the `case` sections.

__NOTE 1__: The `String` in the `switch` expression is compared with the
expressions associated with each `case` label as if the `Strings.equals` method
were being used.

__NOTE 2__: Ensure that the expression in any `switch` statement is not null to
prevent a `NullPointerException` from being thrown.

### while and do-while Statements

```
while (expression) {
     statement(s)
}
```

```
do {
     statement(s)
} while (expression);
```

Difference between `do-while` and `while` is that `do-while` evaluates its
expression at the bottom of the loop instead of the top. In effect, the
statements within the do block are always executed at least once.

### for Statement

```
for (initialization; termination; increment) {
    statement(s)
}
```

The three expressions of the `for` loop are optional; an infinite loop can be
created as follows:

```
for ( ; ; ) {
    // code here
}
```

The `for` statement has another form designed for iteration through Collections
and arrays (sometimes referred to as the _enhanced for_ statement).

```
class EnhancedForDemo {
    public static void main(String[] args){
         int[] numbers =
             {1,2,3,4,5,6,7,8,9,10};
         for (int item : numbers) {
             System.out.println("Count is: " + item);
         }
    }
}
```

### break Statement
An unlabeled `break` statement terminates the innermost `switch`, `for`,
`while`, or `do-while` statement, but a labeled `break` terminates an outer
statement.

```
class BreakWithLabelDemo {
    public static void main(String[] args) {

        int[][] arrayOfInts = {
            { 32, 87, 3, 589 },
            { 12, 1076, 2000, 8 },
            { 622, 127, 77, 955 }
        };
        int searchfor = 12;

        int i;
        int j = 0;
        boolean foundIt = false;

    search:
        for (i = 0; i < arrayOfInts.length; i++) {
            for (j = 0; j < arrayOfInts[i].length;
                 j++) {
                if (arrayOfInts[i][j] == searchfor) {
                    foundIt = true;
                    break search;
                }
            }
        }

        if (foundIt) {
            System.out.println("Found " + searchfor + " at " + i + ", " + j);
        } else {
            System.out.println(searchfor + " not in the array");
        }
    }
}

// Output: Found 12 at 1, 0
```

### continue Statement
The `continue` statement skips the current iteration of a `for`, `while`, or
`do-while` loop.

A labeled `continue` statement skips the current iteration of an outer loop
marked with the given label.

```
class ContinueWithLabelDemo {
    public static void main(String[] args) {

        String searchMe = "Look for a substring in me";
        String substring = "sub";
        boolean foundIt = false;

        int max = searchMe.length() -
                  substring.length();

    test:
        for (int i = 0; i <= max; i++) {
            int n = substring.length();
            int j = i;
            int k = 0;
            while (n-- != 0) {
                if (searchMe.charAt(j++) != substring.charAt(k++)) {
                    continue test;
                }
            }
            foundIt = true;
                break test;
        }
        System.out.println(foundIt ? "Found it" : "Didn't find it");
    }
}

// Output: Found it
```

### return Statement
The `return` statement exits from the current method, and control flow returns
to where the method was invoked. When a method is declared `void`, use the form
of `return` that doesn't return a value `return;`.


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
