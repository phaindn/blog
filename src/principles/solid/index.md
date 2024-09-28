---
outline: deep
---

# S.O.L.I.D principles

<img src="//assets/solid/solid-hero.png" alt="worry?">

In software development we usually use **Object Oriented Design** when it comes to writing flexible, scalable, maintainable and reusable code. When teamworking, it's better to implement some principles to avoid *"re-invent the wheel"* and ensure the consistency of the project, one of the most famous principles are SOLID.

---

The SOLID principle helps in reducing **tight coupling**, making your code **loose coupling**.

> Tight coupling means a group of classes are highly dependent on one another.


## What exactly SOLID is?
SOLID is an acronym of five principles below:

### <ins>S</ins>ingle Responsibility Principle
This principle states that *“a class should have only one reason to change”* which means ***a class should have a single responsibility or single job or single purpose***

### <ins>O</ins>pen-Closed Principle
This principle states that *“software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification”* which means you should be able to extend a class behavior, without modifying it.

### <ins>L</ins>iskov Substitution Principle
This principle states that *“Derived or child classes must be substitutable for their base or parent classes“*. This principle ensures that any class that is the child of a parent class should be usable in place of its parent without any unexpected behavior.

### <ins>I</ins>nterface Segregation Principle
This principle states that *“do not force any client to implement an interface which is irrelevant to them“*. This is a little bit abstraction but we can understand it like "it's no use for a fish to know how to run like a cat because they have no leg".

### <ins>D</ins>ependency Inversion Principle
There are two key points are here to keep in mind about this principle:

- High-level modules/classes should not depend on low-level modules/classes. Both should depend upon abstractions.
- Abstractions should not depend upon details. Details should depend upon abstractions.

::: danger
**Dependency Inversion** and **Dependency Injection** are two different concept.
:::

## Not detailed enought?
<img src="//assets/solid/pepe-worry.jpg" width="200" alt="worry?">
Don't worry, I have 5 separated articles for those principles which I'll dig more deep about them.