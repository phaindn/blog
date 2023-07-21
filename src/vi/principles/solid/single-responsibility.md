---
outline: deep
---

# <ins>S</ins>ingle Responsibility Principle

<img src="/assets/solid/single-responsibility-hero.png" alt="worry?">

This principle states that *“a class should have only one reason to change”* which means ***a class should have a single responsibility or single job or single purpose***.

---

A class with manu function will become cumbersome when the application scaled up and it will take much more effort to maintain and also risky because it can affect other modules.

We can take a look into example:

```java
class Product {

    public int id;
    public String name;
    public double price;
    public int quantity;

    @override
    public String toString() {
        return this.id + '-' + this.name + '-' + this.price + '-' + this.quantity;
    }

    public String toJSON() {
        return Json.Serialize(std);
    }

    public void printToConsole() {
        System.out.println(this.toString());
    }

    public void printToConsoleAsJSON() {
        System.out.println(this.toJSON());
    }

    public void insertToDb() {
        dbInstance.insert(this);
    }

    public void saveToFile(String outputDir) {
        FileWriter file = new FileWriter(outputDir);
        file.write(this.toJSON());
        file.close();
    }
}
```

This class has violate the principle because it contains function to print to console, save into database, save to file. Let's fix it:

```java
interface Serializable {
    public String toJSON();
}

class Product implements Serializable {

    public int id;
    public String name;
    public double price;
    public int quantity;

    @override
    public String toString() {
        return this.id + '-' + this.name + '-' + this.price + '-' + this.quantity;
    }

    public String toJSON() {
        return Json.Serialize(std);
    }
}

class Printer {
    public static void printToConsole(Serializable object) {
        System.out.println(object.toString());
    }

    public static void printToConsoleAsJSON(Serializable object) {
        System.out.println(object.toJSON());
    }
}

class DatabaseManager {
    private static const DatabaseContext instance;

    static {
        // initialize instance
    }

    public static void insertToDb(Object o) {
        this.instance.insert(o);
    }
}

class FileManager {
    public static void saveToFile(Serializable object, String outputDir) {
        FileWriter file = new FileWriter(outputDir);
        file.write(object.toJSON());
        file.close();
    }
}
```

---

::: tip
Sometime we can ignore this principle if the violation is small enough.
Common examples that we can ignore SRP are helper class or utilities class because they contains many small function that do very simple job.
:::

```java
// the Util class violate the SRP but because it's small so we can accept it
public class Util {
  public String formatTime(Date d) {}
  public DatabaseContext getDbConnection() {}
  public Location getCurrentLocation() {}
}
```