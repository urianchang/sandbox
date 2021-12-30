# Java Notes


## Naming Conventions
* Variable names are case-sensitive. An unlimited-length sequence of Unicode
  letters and digits, beginning with a letter, the dollar sign "$", or the
  underscore character. The convention, however, is to always begin your
  variable names with a letter. Additionally, the dollar sign character, by
  convention, is never used at all. You may find some situations where
  auto-generated names will contain the dollar sign, but your variable names
  should always avoid using it. A similar convention exists for the underscore
  character; while it's technically legal to begin your variable's name with
  an underscore, this practice is discouraged. White space is not permitted.
* Subsequent characters may be letters, digits, dollar signs, or underscore
  characters. When choosing a name for your variables, use full words instead
  of cryptic abbreviations.
* If the name you choose consists of only one word, spell that word in all
  lowercase letters. If it consists of more than one word, capitalize the first
  letter of each subsequent word (e.g. `gearRatio`). If your variable stores a
  constant value, such as `static final int NUM_GEARS = 6`. By convention, the
  underscore character is never used elsewhere.

Keep in mind of the
[Java keywords](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html).


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


## Operators
All binary operators except for the assignment operators are evaluated from left
to right; assignment operators are evaluated right to left.

| Operators            | Precedence                             |
| -------------------- | -------------------------------------- |
| postfix              | expr++ expr--                          |
| unary                | ++expr --expr +expr -expr ~ !          |
| multiplicative       | * / %                                  |
| additive             | + -                                    |
| shift                | << >> >>>                              |
| relational           | < > <= >= instanceof                   |
| equality             | == !=                                  |
| bitwise AND          | &                                      |
| bitwise exclusive OR | ^                                      |
| bitwise inclusive OR | `|`                                    |
| logical AND          | &&                                     |
| logical OR           | ||                                     |
| ternary              | ? :                                    |
| assignment           | = += -= *= /= %= %= ^= |= <<= >>= >>>= |


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


## static Keyword
The keyword `static` indicates that the particular member belongs to a type,
rather than to an instance of that type. This means that only one instance of
that static member is created which is shared across all instances of the class.

The keyword can be applied to variables, methods, blocks, and nested class.

### static Fields (class variables)
If a field is declared `static`, then exactly a single copy of that field is
created and shared among all instances of that class. Static variables go in a
particular pool in JVM memory called Metaspace (before Java 8, this pool was
called Permanent Generation or PermGen).

Reasons to use `static` fields:

* When the value of variable is independent of objects
* When the value is supposed to be shared across all objects

Key points to remember:

* `static` variables belong to a class, so they can be accessed directly using
  class name and don't need any object reference
* can only be declared at the class level
* can be accessed without object initialization
* refer to `static` variables using class name (e.g. `Car.numberOfCars++`)

### static Methods (class methods)
Like `static` fields, `static` methods belong to a class instead of the object.
They're meant to be used without creating objects of the class.

Reasons to use `static` methods:

* To access/manipulate static variables and other static methods that don't
  depend upon objects
* Widely used in utility and helper classes

Key points to remember:

* `static` methods are resolved at compile time. Since method overriding is part
  of Runtime Polymorphism, __static methods cannot be overridden__.
* abstract methods can't be static
* cannot use `this` or `super` keywords
* Following combinations of instance, class methods and variables are valid:

    1. Instance methods can directly access both instance methods and instance
       variables
    2. Instance methods can also access `static` variables and `static` methods
       directly
    3. `static` methods can access all `static` variables and other `static`
       methods
    4. `static` methods cannot access instance variables and instance methods
       directly; they need some object reference to do so

### static Initialization Blocks
A static initialization block is a normal block of code enclosed in braces and
preceded by the `static` keyword. If `static` variables require additional,
multi-statement logic while initialization, then a `static` block can be used.

```
static {
    // whatever code is needed for initialization goes here
}
```

A class can have any number of initialization blocks, and they can appear
anywhere in the class body. The runtime system guarantees that static
initialization blocks are called in the order that they appear in the source
code.

Reasons to use `static` blocks:

* If initialization of `static` variables requires some additional logic except
  the assignment
* If the initialization of `static` variables is error-prone and requires
  exception handling

An alternative to static blocks: private static method.

```
class Whatever {
    public static varType myVar = initializeClassVariable();

    private static varType initializeClassVariable() {

        // initialization code goes here
    }
}
```

The advantage of private static methods is that they can be reused later if you
need to reinitialize the class variable.

#### Initializing Instance Members
There are two alternatives to using a constructor to initialize instance
variables: initializer blocks and final methods.

Initializer blocks for instance variables look just like static initializer
blocks, but without the `static` keyword.

```
{
    // whatever code is needed for initialization goes here
}
```

The Java compiler copies initializer blocks into every constructor. Therefore,
this approach can be used to share a block of code between multiple
constructors.

__Difference between static and initialization blocks__

* Static initializer block will be called on loading of the class, and will have
  no access to instance variables or methods. It is often used to create static
  variables.
* Non-static initializer block is created on object construction only, will have
  access to instance variables and methods, and will be called at the beginning
  of the constructor, after the super constructor has been called and before any
  other subsequent constructor code is called.

Reference: [One of a few StackOverflow Q&A's](https://stackoverflow.com/questions/12550135/static-block-vs-initializer-block-in-java)

A _final method_ cannot be overridden in a subclass.

```
class Whatever {
    private varType myVar = initializeInstanceVariable();

    protected final varType initializeInstanceVariable() {

        // initialization code goes here
    }
}
```

This is useful if subclasses might want to resuse the initialization method. The
method is final because calling non-final methods during initialization can
cause problems.

### static Class
Creating a class within a class provides a way of grouping elements that are
only going to be used in one place. This keeps code more organized and readable.

Nested class architecture is divided into two:

* nested classes that are declared `static` are called __`static` nested classes__
* nested classes that are non-`static` are called __inner classes__

__IMPORTANT__: Inner classes have access to all members of the enclosing class
(including private), whereas the `static` nested classes only have access to
static members of the outer class.

The most widely used approach to create singleton objects is through a `static`
nested class. It doesn't require any synchronization and is easy to learn and
implement.

```
public class Singleton  {
    private Singleton() {}

    private static class SingletonHolder {
        public static final Singleton instance = new Singleton();
    }

    public static Singleton getInstance() {
        return SingletonHolder.instance;
    }
}
```

Reasons to use a `static` inner class:

* grouping classes that will be used only in one place increases encapsulation
* code is brought closer to the place that will be only one to use it; this
  increases readability and code is more maintainable
* if nested class doesn't require any access to it's enclosing class instance
  members, then it's better to declare it as `static` because this way, it won't
  be couple to the outer class and hence will be more optimal as they won't
  require any heap or stack memory

__Reference__:
* [Oracle docs on initialization blocks](https://docs.oracle.com/javase/tutorial/java/javaOO/initial.html)
* [Baeldung article on Java Static keyword](https://www.baeldung.com/java-static)


## Classes
A class provides the blueprint for objects; you create an object from a class.

### Declaring Classes
```
class MyClass extends MySuperClass implements YourInterface {
    // field, constructor, and
    // method declarations
}
```

In general, class declarations can include these components, in order:

1. Modifiers such as `public`, `private`, etc.
2. The class name, with the initial letter capitalized by convention.
3. The name of the class' parent (superclass), if any, preceded by the keyword
   `extends`. __A class can only extend (subclass) one parent.__
4. A comma-separated list of interfaces implemented by the class, if any,
   preceded by the keyword `implements`. A class can `implement` more than one
   interface.
5. The class body, surrounded by braces, {}.

### Declaring Member Variables
There are several kinds of variables:

* fields: member variables in a class
* local variables: variables in a method or block of code
* parameters: variables in method declarations

Field declarations are composed of three components, in order:

1. Zero or more modifiers (e.g. `private`, `public`)
2. The field's type
3. The field's name

#### Access Modifiers
* `public`: field is accessible from all classes
* `private`: field is accessible only within its own class

In the spirit of encapsulation, it is common to make fields private. This means
that they can only be _directly_ accessed from the Bicycle class. To access
these values, we can _indirectly_ access them by adding public methods that
obtain the field values for us.

__Naming conventions__:

* the first letter of a class name should be capitalized
* the first (or only) word in a method name should be a verb

### Defining Methods
```
public double calculateAnswer(double wingSpan, int numberOfEngines,
                              double length, double grossTons) {
    //do the calculation here
}
```

The only required elements of a method declaration are the method's return type,
name, a pair of parentheses, and a body between braces.

Method declarations have six components, in order:

1. Modifiers (e.g. `private`, `public`)
2. Return type: The data type of the value returned by the method, or `void` if
   the method does not return a value.
3. Method name: The rules for field names apply to method names as well, but the
   convention is a little different
4. Parameter list in parenthesis: Comma-delimited list of input parameters,
   preceded by their data types, enclosed by parentheses. If there are no
   parameters, you must use empty parentheses.
5. Exception list
6. Method body, enclosed between braces

#### Overloading Methods
Typically, a method has a unique name within its class. However, a method might
have the same name as other methods due to _method overloading_. Java can
distinguish between methods with different method signatures: methods within a
class can have the same name if they have different parameter lists.

You cannot declare more than one method with the same name and the same number
and type of arguments, because the compiler cannot tell them apart. The compiler
does not consider return type when differentiating methods, so you cannot
declare two methods with the same signature even if they have a different return
type.

#### Class constructors
A class contains constructors that are invoked to create objects from the class
blueprint. Constructor declarations look like method declarations--except that
they use the name of the class and have no return type.

```
public Bicycle(int startCadence, int startSpeed, int startGear) {
    gear = startGear;
    cadence = startCadence;
    speed = startSpeed;
}

Bicycle myBike = new Bicycle(30, 0, 8);
```

You don't have to provide any constructors for your class, but you must be
careful when doing this. The compiler automatically provides a no-argument,
default constructor for any class without constructors. The default constructor
will call the no-argument constructor of the superclass. If your class has no
explicit superclass, then it has an implicit superclass of Object, which does
have a no-argument constructor.

#### varargs
You can use a construct called `varargs` to pass an arbitrary number of values
to a method. You use varargs when you don't know how many of a particular type
of argument will be passed to the method. It's a shortcut to creating an array
manually.

To use varargs, follow the type of the last parameter by an ellipsis, then a
space, and the parameter name. The method can then be called with any number of
that parameter, including none.

```
public Polygon polygonFrom(Point... corners) {
    int numberOfSides = corners.length;
    double squareOfSide1, lengthOfSide1;
    squareOfSide1 = (corners[1].x - corners[0].x)
                     * (corners[1].x - corners[0].x)
                     + (corners[1].y - corners[0].y)
                     * (corners[1].y - corners[0].y);
    lengthOfSide1 = Math.sqrt(squareOfSide1);

    // more method body code follows that creates and returns a
    // polygon connecting the Points
}
```

#### Parameter Names
When you declare a parameter to a method or a constructor, you provide a name
for that parameter. This name is used within the method body to refer to the
passed-in argument. __The name of a parameter must be unique in its scope.__ It
cannot be the same as the name of another parameter for the same method or
constructor, and it cannot be the name of a local variable within the method or
constructor.

A parameter can have the same name as one of the class' fields. If this is the
case, the parameter is said to _shadow_ the field. Shadowing fields can make
your code difficult to read and is conventionally used only within constructors
and methods that set a particular field.

#### Passing Arguments
Primitive arguments, such as an `int`, are passed into methods __by value__.
This means that any changes to the values of the parameters exist only within
the scope of the method. When the method returns, the parameters are gone and
any changes to them are lost.

Reference data type parameters, such as objects, are also passed into methods
__by value__. This means that when the method returns, the passed-in reference
still references the same object as before. _However,_ the values of the
object's fields _can_ be changed in the method, if they have the proper access
level.


## Objects
```
Point originOne = new Point(23, 94);
```

Creating an object has three parts:

1. Declaration: Associate a variable name with an object type.
2. Instantiation: The `new` keyword is a Java operator that creates the object.
3. Initialization: The `new` operator is followed by a call to a constructor,
   which initializes the new object.

### Declaration
Simply declaring a reference variable does not create an object. For that, you
need the `new` operator.

### Instantiation
The `new` operator instantiates a class by allocating memory for a new object
and returning a reference to that memory. It requires a single, postfix
argument: a call to a constructor. The name of the constructor provides the name
of the class to instantiate. It returns a reference to the object it created.
The reference returned by the `new` operator does not have to be assigned to a
variable. It can also be used directly in an expression.

```
int height = new Rectangle().height;
```

### Using Objects
```
objectReference.fieldName

objectReference.methodName(argumentList);
```

### Initialization
Each constructor lets you provide initial values for the rectangle's origin,
width, and height, using both primitive and reference types. If a class has
multiple constructors, they must have different signatures. The Java compiler
differentiates the constructors based on the number and the type of arguments.

### Garbage Collector
An object is eligible for garbage collection when there are no more references
to that object. References that are held in a variable are usually dropped when
the variable goes out of scope. Or, you can explicitly drop an object reference
by setting the variable to the special value `null`. All references to an object
must be dropped before the object is eligible for garbage collection.

The Java runtime environment has a garbage collector that periodically frees the
memory used by objects that are no longer referenced. The garbage collector does
its job automatically when it determines that the time is right.

### Returning a Class or Interface
When a method uses a class name as its return type, the class of the type of the
returned object must be either a subclass of, or the exact class of, the return
type.

Example:

```
// Class hierarchy of Object -> Number -> ImaginaryNumber

// Can return an ImaginaryNumber but not an Object
public Number returnANumber() {
    ...
}

// Override a method and define it to return a subclass of the original method.
// This is called covariant return type, meaning the return type is allowed to
// vary in the same direction as the subclass
public ImaginaryNumber returnANumber() {
    ...
}
```

### this Keyword
Within an instance method or a constructor, `this` is a reference to the
_current_ object: the object whose method or constructor is being called.

#### Using this with a Field
The most common reason for using the `this` keyword is because a field is
shadowed by a method or constructor parameter.

```
public class Point {
    public int x = 0;
    public int y = 0;

    //constructor
    public Point(int a, int b) {
        // x = a;
        // y = b;
        this.x = x;
        this.y = y;
    }
}
```

#### Using this with a Constructor
```
public class Rectangle {
    private int x, y;
    private int width, height;

    public Rectangle() {
        this(0, 0, 1, 1);
    }
    public Rectangle(int width, int height) {
        this(0, 0, width, height);
    }
    public Rectangle(int x, int y, int width, int height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    ...
}
```

This class contains a set of constructors. Each constructor initializes some or
all of the rectangle's member variables. The constructors provide a default
value for any member variable whose initial value is not provided by an
argument.

__If present, the invocation of another constructor must be the first line in
the constructor.__

### Controlling Access to Members of a Class
There are two levels of access control:

* At the top level: `public` or _package-private_ (no explicit modifier)
* At the member level: `public`, `private`, `protected`, or _package-private_
  (no explicit modifier)

__Access Levels__

| Modifier    | Class | Package | Subclass | World |
| ----------- | :---: | :-----: | :------: | :---: |
| public      | Y     | Y       | Y        | Y     |
| protected   | Y     | Y       | Y        | N     |
| no modifier | Y     | Y       | N        | N     |
| private     | Y     | N       | N        | N     |

Access levels affect you in two ways. First, when you use classes that come from
another source, such as the classes in the Java platform, access levels
determine which members of those classes your own classes can use. Second, when
you write a class, you need to decide what access level every member variable
and every method in your class should have.

__Tips__

* Use the most restrictive access level that makes sense for a particular
  member. Use `private` unless you have a good reason not to.
* Avoid `public` fields except for constants. Public fields tend to link you to
  a particular implementation and limit your flexibility in changing your code.


## Nested Classes
Nested classes are divided into two categories: static and non-static. Nested
classes that are declared `static` are called _static nested classes_.
Non-static nested classes are called _inner classes_.

A nested class is a member of its enclosing class. Non-static nested classes
have access to other members of the enclosing class, even if they are declared
private. Static nested classes do not have access to other members of the
enclosing class.

### Why use nested classes?
Compelling reasons for using nested classes:

* It is a way of logically grouping classes that are only used in one place.

    * If a class is useful to only one other class, then it is logical to embed
      it in that class and keep the two together. Nesting such "helper classes"
      makes their package more streamlined.

* It increases encapsulation.

    * Consider two top-level classes, A and B, where B needs access to members
      of A that would otherwise be declared `private`. By hiding class B within
      class A, A's members can be declared private and B can access them. In
      addition, B itself can be hidden from the outside world.

* It can lead to more readable and maintainable code.

### Static Nested Classes
As with class methods and variables, a static nested class is associated with
its outer class. They are accessed using the enclosing class name:

```
OuterClass.StaticNestedClass
```

To create an object for the static nested class...

```
OuterClass.StaticNestedClass nestedObject = new OuterClass.StaticNestedClass();
```

### Inner Classes
An inner class is associated with an instance of its enclosing class and has
direct access to that object's methods and fields. Also, because an inner class
is associated with an instance, it cannot define any static members itself.

Objects that are instances of an inner class exist _within_ an instance of the
outer class.

```
class OuterClass {
    ...
    class InnerClass {
        ...
    }
}
```

An instance of `InnerClass` can exist only within an instance of `OuterClass`
and has direct access to the methods and fields of its enclosing instance.

To instantiate an inner class, you must first instantiate the outer class. Then,
create the inner object within the outer object with this syntax:

```
OuterClass.InnerClass innerObject = outerObject.new InnerClass();
```

### Serialization
Serialization of inner classes, including local and anonymous classes, is
strongly discouraged. When the Java compiler compiles certain constructs (e.g.
inner classes), it creates _synthetic constructs_; these are classes, methods,
fields, and other constructs that do not have a corresponding construct in the
source code. Synthetic constructs enable Java compilers to implement new Java
language features without changes to the JVM. However, synthetic constructs can
vary among different Java compiler implementations, which means that `.class`
files can vary among different implementations as well. Consequently, you may
have compatibility issues if you serialize an inner class and then deserialize
it with a different JRE implementation.

__More information__
* [Baeldung article on Java Synthetic](https://www.baeldung.com/java-synthetic)

### Inner Class Example
Create an array, fill it with integers, and then output only values of even
indices of the array in ascending order.

```
public class DataStructure {

    // Create an array
    private final static int SIZE = 15;
    private int[] arrayOfInts = new int[SIZE];

    public DataStructure() {
        // fill the array with ascending integer values
        for (int i = 0; i < SIZE; i++) {
            arrayOfInts[i] = i;
        }
    }

    public void printEven() {

        // Print out values of even indices of the array
        DataStructureIterator iterator = this.new EvenIterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();
    }

    interface DataStructureIterator extends java.util.Iterator<Integer> { }

    // Inner class implements the DataStructureIterator interface,
    // which extends the Iterator<Integer> interface

    private class EvenIterator implements DataStructureIterator {

        // Start stepping through the array from the beginning
        private int nextIndex = 0;

        public boolean hasNext() {

            // Check if the current element is the last in the array
            return (nextIndex <= SIZE - 1);
        }

        public Integer next() {

            // Record a value of an even index of the array
            Integer retValue = Integer.valueOf(arrayOfInts[nextIndex]);

            // Get the next even element
            nextIndex += 2;
            return retValue;
        }
    }

    public static void main(String s[]) {

        // Fill the array with integer values and print out only
        // values of even indices
        DataStructure ds = new DataStructure();
        ds.printEven();
    }
}
```

### Local Classes
Local classes are classes that are defined in a block. A local class has access
to the members of its enclosing class as well as local variables; __however,__
a local class can only access local variables that are declared final. When a
local class accesses a local variable or parameter or the enclosing block, it
_captures_ that variable or parameter.

Starting in Java SE 8, a local class can access local variables and parameters
of the enclosing block that are final or effectively final. A variable or
parameter whose value is never changed after it is initialized is effectively
final. Also, if you declare the local class in a method, it can access the
method's parameters.

#### Local Classes are similar to Inner Classes
Local classes are similar to inner classes because they cannot define or declare
any static members. They are non-static because they have access to instance
members of the enclosing block. Consequently, they cannot contain most kinds
of static declarations.

You __cannot__ declare an interface inside a block; interfaces are inherently
static.

```
public void greetInEnglish() {
    interface HelloThere {
       public void greet();
    }
    class EnglishHelloThere implements HelloThere {
        public void greet() {
            System.out.println("Hello " + name);
        }
    }
    HelloThere myGreeting = new EnglishHelloThere();
    myGreeting.greet();
}
```

You __cannot__ declare static initializers or member interfaces in a local
class.

```
public void sayGoodbyeInEnglish() {
    class EnglishGoodbye {
        public static void sayGoodbye() {
            System.out.println("Bye bye");
        }
    }
    EnglishGoodbye.sayGoodbye();
}
```

A local class can have static members provided that they are constant variables.

```
public void sayGoodbyeInEnglish() {
    class EnglishGoodbye {
        public static final String farewell = "Bye bye";
        public void sayGoodbye() {
            System.out.println(farewell);
        }
    }
    EnglishGoodbye myEnglishGoodbye = new EnglishGoodbye();
    myEnglishGoodbye.sayGoodbye();
}
```

__References__:
* [Oracle docs](https://docs.oracle.com/javase/tutorial/java/javaOO/localclasses.html)

### Anonymous Classes
Anonymous classes enable you to make your code more concise. They enable you to
declare and instantiate a class at the same time. They are like local classes
except that they do not have a name. Use them if you need to use a local class
only once.

#### Declaration
While local classes are class declarations, anonymous classes are expressions,
which means that you define the class in another expression.

The following example, `HelloWorldAnonymousClasses`, uses anonymous classes in
the initialization statements of the local variables `frenchGreeting` and
`spanishGreeting`, but uses a local class for the initialization of the variable
`englishGreeting`:

```
public class HelloWorldAnonymousClasses {

    interface HelloWorld {
        public void greet();
        public void greetSomeone(String someone);
    }

    public void sayHello() {

        class EnglishGreeting implements HelloWorld {
            String name = "world";
            public void greet() {
                greetSomeone("world");
            }
            public void greetSomeone(String someone) {
                name = someone;
                System.out.println("Hello " + name);
            }
        }

        HelloWorld englishGreeting = new EnglishGreeting();

        HelloWorld frenchGreeting = new HelloWorld() {
            String name = "tout le monde";
            public void greet() {
                greetSomeone("tout le monde");
            }
            public void greetSomeone(String someone) {
                name = someone;
                System.out.println("Salut " + name);
            }
        };

        HelloWorld spanishGreeting = new HelloWorld() {
            String name = "mundo";
            public void greet() {
                greetSomeone("mundo");
            }
            public void greetSomeone(String someone) {
                name = someone;
                System.out.println("Hola, " + name);
            }
        };
        englishGreeting.greet();
        frenchGreeting.greetSomeone("Fred");
        spanishGreeting.greet();
    }

    public static void main(String... args) {
        HelloWorldAnonymousClasses myApp =
            new HelloWorldAnonymousClasses();
        myApp.sayHello();
    }
}
```

#### Syntax of Anonymous Classes
An anonymous class is an expression. The syntax of an anonymous class expression
is like the invocation of a constructor, except that there is a class definition
contained in a block of code.

```
HelloWorld frenchGreeting = new HelloWorld() {
    String name = "tout le monde";
    public void greet() {
        greetSomeone("tout le monde");
    }
    public void greetSomeone(String someone) {
        name = someone;
        System.out.println("Salut " + name);
    }
};
```

The anonymous class expression consists of the following:

* The new operator
* The name of an interface to implement or a class to extend. In this example,
  the anonymous class is implementing the interface `HelloWorld`.
* Parentheses that contain the arguments to a constructor, just like a normal
  class instance creation expression. __Note:__ When you implement an interface,
  there is no constructor, so you use an empty pair of parentheses.
* A body, which is a class declaration body. More specifically, in the body,
  method declarations are allowed but statements are not.

Because an anonymous class definition is an expression, it must be part of a
statement.

__References__:
* [Oracle docs](https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html)

### Lambda Expressions
Lambda expressions let you express instances of single-method classes more
compactly.

__References__:
* [Oracle docs](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)
* [When to Use Nested Classes, Local Classes, Anonymous Classes, and Lambda Expressions](https://docs.oracle.com/javase/tutorial/java/javaOO/whentouse.html)


## Enum Types
An _enum type_ is a special data type that enables for a variable to be a set of
predefined constants. The variable must be equal to one of the values that have
been predefined for it. Because they are constants, the names of an enum type's
fields are in uppercase letters.

```
public enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY,
    THURSDAY, FRIDAY, SATURDAY
}
```

__NOTE__: You should use enum types any time you need to represent a fixed set
of constants.

The `enum` declaration defines a _class_ (called an _enum type_). The enum class
body can include methods and other fields. The compiler automatically adds some
special methods when it creates an enum. For example, there is a static `values`
method that returns an array containing all of the values of the enum in the
order they are declared.

When there are fields and methods, the list of enum constants must end with a
semicolon. Please refer to the `Planet` example in the Oracle Java docs.

__References__:
* [Oracle docs](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html)


## Annotations
_Annotations,_ a form of metadata, provide data about a program that is not
part of the program itself. Annotations have no direct effect on the operation
of the code they annotate.

__Uses__:
* Information for the compiler
    * Can be used by the compiler to detect errors or suppress warnings.
* Compile-time and deployment-time processing
    * Software tools can process annotation information to generate code, XML
      files, and so forth.
* Runtime processing
    * Some annotations are available to be examined at runtime.

### Basics
```
@Entity

@Override
void mySuperMethod() { ... }

@Author(
   name = "Benjamin Franklin",
   date = "3/27/2003"
)
class MyClass() { ... }
```

The at sign character (`@`) indicates to the compiler that what follows is
an annotation.

Annotations can be applied to declarations: declarations of classes, fields,
methods, and other program elements. When used on a declaration, each
annotation often appears, by convention, on its own line.

Many annotations replace comments in code. A good example is shown in the
["Declaring an Annotation Type" article](https://docs.oracle.com/javase/tutorial/java/annotations/declaring.html)
of the Oracle docs.

### Predefined Annotation Types
* @Deprecated: Indicates that the marked element is deprecated and should no
  longer be used.
* @Override: Informs the compiler that the element is meant to override an
  element declared in a superclass.
* @SuppressWarnings: Tells the compiler to suppress specific warnings that it
  would otherwise generate.
* @SafeVarargs: When applied to a method or constructor, asserts that the code
  does not perform potentially unsafe operations on its varargs parameter.
* @FunctionalInterface: Introduced in Java SE 8, indicates the type declaraction
  is intended to be a functional interface.
* @Retention: Specifies how the marked annotation is stored.
* @Documented: Indicates that whenever the specified annotation is used those
  elements should be documented using the Javadoc tool.
* @Target: Marks another annotation to restrict what kind of Java elements the
  annotation can be applied to.
* @Inherited: Indicates that the annotation type can be inherited from the super
  class.
* @Repeatable: Introduced in Java SE 8, indicates that the marked annotation can
  be applied more than once to the same declaration or type use.

__References__:
* [Predefined Annotation Types](https://docs.oracle.com/javase/tutorial/java/annotations/predefined.html)
* [Type Annotations](https://docs.oracle.com/javase/tutorial/java/annotations/type_annotations.html)
* [Repeating Annotations](https://docs.oracle.com/javase/tutorial/java/annotations/repeating.html)


## Interfaces
WIP: [Interfaces](https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html)


## Inheritance
WIP: [Inheritance](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html)


## Further Reading
* [Oracle Java Documents](https://docs.oracle.com/javase/tutorial/java/TOC.html)
