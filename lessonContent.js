let unitNames = ["Contest 1", "Contest 2","Contest 3", "Contest 4"];
let units = [
    ["Computer Number Systems","Recursive Functions","What Does This Program Do? - Branching"],
    ["Prefix/Infix/Postfix Notation", "Bit-String Flicking","What Does This Program Do? - Looping"],
    ["Boolean Algebra", "Data Structures","What Does This Program Do? - Arrays"],
    ["Graph Theory", "Digital Electronics","What Does This Program Do? - Strings"]
];


let lessonContents={
    "Computer Number Systems":{
        header:`To understand how computers represent numbers, we need to learn about different number systems. The most common number systems are binary, octal, decimal, and hexadecimal. Each system has its own base, which determines how many digits it uses and how it represents values.<br><br>
        <ul>
            <li><strong>Binary (Base 2):</strong> Uses two digits, 0 and 1. Each digit represents a power of 2.</li>
            <li><strong>Octal (Base 8):</strong> Uses eight digits, from 0 to 7. Each digit represents a power of 8.</li>
            <li><strong>Decimal (Base 10):</strong> Uses ten digits, from 0 to 9. This is the system we use in everyday life.</li>
            <li><strong>Hexadecimal (Base 16):</strong> Uses sixteen symbols, from 0 to 9 and A to F. Each digit represents a power of 16.</li>
        </ul>
        <br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=Computer_Number_Systems" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://www.richcode.org/contests/acsl/lesson/1" target="_blank">VIDEO/SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.o9qltj3i4hko" target="_blank">Homework Doc</a>`,
        img:"imgs/cns.png"
    },
    "Recursive Functions":{
        header:`A recursive function is a function that calls itself in order to solve a problem. It has a base case that stops the recursion and a recursive case that breaks the problem down into smaller subproblems.<br><br>
        It is written as a piecewise function, where the right has the condition for each case. Calling the function with a value will return the result based on the defined cases.<br><br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=Recursive_Functions" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://docs.google.com/presentation/d/18JO3oxrAUP3ydipYLicd7wtb8zV-KhhIS5ggl2hP37o/edit?usp=sharing" target="_blank">SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.w3da8kcsycb8" target="_blank">Homework Doc</a>`,
        img:"imgs/rf.png"
    },
    "What Does This Program Do? - Branching":{
        header:`Analyzing pseudocode to determine what a program does is a key skill in programming. It involves understanding the flow of control, conditions, and how variables change throughout the program.<br><br>
        This lesson focuses on branching, which is when a program makes decisions based on conditions. It includes if-else statements that alter the flow of execution based on certain criteria.<br><br>
        ACSL has their own pseudocode format, which is similar to Python but with some differences. It has specific syntax for conditions and loops.<br><br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=What_Does_This_Program_Do%3F" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://docs.google.com/presentation/d/1m_dwQDF2a2NO0gRYqFeMoPIuL5o_kp16TN8ibQxZ4Kg/edit?usp=sharing" target="_blank">SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.pj49mjy3cscx" target="_blank">Homework Doc</a>`,
        img:"imgs/wdtpdb.png"
    },



    "Prefix/Infix/Postfix Notation":{
        header:`In computer science, we often need to represent mathematical expressions in different notations. The three common notations are prefix, infix, and postfix.<br><br>
        <ul>
            <li><strong>Prefix Notation:</strong> The operator comes before the operands. For example, + 3 4 means add 3 and 4.</li>
            <li><strong>Infix Notation:</strong> The operator is placed between the operands. For example, 3 + 4 means add 3 and 4.</li>
            <li><strong>Postfix Notation:</strong> The operator comes after the operands. For example, 3 4 + means add 3 and 4.</li>
        </ul>
        <br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=Prefix/Infix/Postfix_Notation" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://docs.google.com/presentation/d/15rw_MCgimIP-QnxovcmtbNFP_5RejpfwNDx0IsMibF8/edit?usp=sharing" target="_blank">SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.x10uwrxgdsy7" target="_blank">Homework Doc</a>`,
        img:"imgs/pipn.png"
    },
    "Bit-String Flicking":{
        header:`Bit-string flicking is a technique used to manipulate binary strings by flipping bits. It involves changing specific bits in a binary representation to achieve a desired outcome.<br><br>
        This lesson focuses on understanding how to flick bits in a binary string. It includes different operations you must use to solve problems.<br><br>
        
        Some operations include:
        <ul>
            <li>NOT: Flips all bits in the string.</li>
            <li>AND: Combines two bit strings by performing a logical AND operation on each corresponding bit.</li>
            <li>OR: Combines two bit strings by performing a logical OR operation on each corresponding bit.</li>
            <li>XOR: Combines two bit strings by performing a logical XOR operation on each corresponding bit.</li>
            <li>Shift: Moves bits to the left or right, filling in with zeros.</li>
            <li>Circulate: Moves bits to the left or right, wrapping around the end of the string.</li>
        </ul>
        <br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=Bit-String_Flicking" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://docs.google.com/presentation/d/1-huu4M53lSP3DVjCGqXOQWnGDtXKW05_bRIKaLbTHto/edit?usp=sharing" target="_blank">SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.pok3i1kiznil" target="_blank">Homework Doc</a>`,
        img:"imgs/bsf.png"
    },
    "What Does This Program Do? - Looping":{
        header:`Analyzing pseudocode to determine what a program does is a key skill in programming. It involves understanding the flow of control, conditions, and how variables change throughout the program.<br><br>
        This lesson focuses on looping, which is when a program repeats a set of instructions until a certain condition is met. It includes while loops and for loops that control the flow of execution based on certain criteria.<br><br>
        ACSL has their own pseudocode format, which is similar to Python but with some differences. It has specific syntax for conditions and loops.<br><br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=What_Does_This_Program_Do%3F" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://docs.google.com/presentation/d/1eQxPvKLRx9akrqKtYFCeS1_ga7VRqyCQKge_5wxOcI4/edit?usp=sharing" target="_blank">SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.dibg4z5whwg" target="_blank">Homework Doc</a>`,
        img:"imgs/wdtpdl.png"
    },



    "Boolean Algebra":{
        header:`Boolean algebra is a branch of algebra that deals with true and false values, often represented as 1 and 0. It is used in computer science to design circuits and algorithms.<br><br>
        The basic operations in Boolean algebra are AND, OR, and NOT. These operations can be combined to create complex expressions that evaluate to true or false.<br><br>
        <ul>
            <li><strong>AND:</strong> The result is true if both operands are true.</li>
            <li><strong>OR:</strong> The result is true if at least one operand is true.</li>
            <li><strong>NOT:</strong> The result is the opposite of the operand.</li>
        </ul>
        There are also laws and properties that govern Boolean algebra, such as the commutative, associative, and distributive laws.<br><br>
        <br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=Boolean_Algebra" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://docs.google.com/presentation/d/1Tp1BBtJ7UFBeIwsZi8jFja3W8JLC1za8j6gTgqq9eWk/edit?usp=sharing" target="_blank">SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.9okguru552i3" target="_blank">Homework Doc</a>`,
        img:"imgs/ba.png"
    },
    "Data Structures":{
        header:`Data structures are ways to organize and store data in a computer so that it can be accessed and modified efficiently. They are essential for managing large amounts of data and implementing algorithms.<br><br>
        Common data structures include arrays, linked lists, stacks, queues, trees, and graphs. Each data structure has its own strengths and weaknesses, and the choice of data structure can greatly affect the performance of an algorithm.<br><br>
        Examples of some data structures in this lesson include:
        <ul>
            <li>Stack: A collection of elements that follows the Last In First Out (LIFO) principle.</li>
            <li>Queue: A collection of elements that follows the First In First Out (FIFO) principle.</li>
            <li>Binary Search Tree: A tree data structure where each node has at most two children, and the left child is less than the parent while the right child is greater.</li>\
            <li>Priority Queue: A data structure where each element has a priority, and elements are served based on their priority rather than their order in the queue.</li>
        </ul>
        <br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=Data_Structures" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://docs.google.com/presentation/d/17vdEZcCls7HwhwOkzjrdtqyjwtkGzCSFA2T171C4NSs/edit?usp=sharing" target="_blank">SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.dcbty2sshljp" target="_blank">Homework Doc</a>`,
        img:"imgs/ds.png"
    },
    "What Does This Program Do? - Arrays":{
        header:`Analyzing pseudocode to determine what a program does is a key skill in programming. It involves understanding the flow of control, conditions, and how variables change throughout the program.<br><br>
        This lesson focuses on arrays, which are collections of elements stored at contiguous memory locations. It includes iterating over and using arrays.<br><br>
        ACSL has their own pseudocode format, which is similar to Python but with some differences. It has specific syntax for arrays.<br><br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=What_Does_This_Program_Do%3F" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://docs.google.com/presentation/d/1vS-UPau86TBEy3EZwv_v7X6Mdr2C-0HBWiA-jC6Ccz8/edit?usp=sharing" target="_blank">SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.k87iqqbzjgw9" target="_blank">Homework Doc</a>`,
        img:"imgs/wdtpda.png"
    },



    "Graph Theory":{
        header:`Graph theory is a branch of mathematics that studies the properties and applications of graphs, which are structures made up of vertices (nodes) connected by edges (lines). It is widely used in computer science for modeling relationships and networks.<br><br>
        In this lesson, we will explore basic concepts of graph theory, including:
        <ul>
            <li>Vertices and Edges: The fundamental components of a graph.</li>
            <li>Directed and Undirected Graphs: Graphs can have edges with a direction or without.</li>
            <li>Weighted Graphs: Graphs where edges have weights or costs associated with them.</li>
            <li>Paths and Cycles: A path is a sequence of edges connecting vertices, while a cycle is a path that starts and ends at the same vertex.</li>
        </ul>
        <br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=Graph_Theory" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://docs.google.com/presentation/d/1b6cwYwaXvNIFtnWKGfHXlmCoY0kmi19e862TA0SExy0/edit?usp=sharing" target="_blank">SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.d137eo1t3qua" target="_blank">Homework Doc</a>`,
        img:"imgs/gt.png"
    },
    "Digital Electronics":{
        header:`Digital electronics is a field of electronics that deals with digital signals and systems. It involves the use of logic gates and other components to create circuits that process binary information.<br><br>
        In this lesson, we will explore basic concepts of digital electronics, such as:
        <ul>
            <li>AND gate: A logic gate that outputs true only if both inputs are true.</li>
            <li>OR gate: A logic gate that outputs true if at least one input is true.</li>
            <li>NOT gate: A logic gate that outputs the opposite of the input.</li>
        </ul>
        Each circuit can be represented as a Boolean Algebra expression; this topic is an extension of the topic of Boolean Algebra, which includes a thorough description of truth tables and simplifying expressions.<br><br>
        <br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=Digital_Electronics" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://docs.google.com/presentation/d/1KlnaL3LgdIxep9iXJ9FWByk4K0s6uU4f-v68QfbRbwk/edit?usp=sharing" target="_blank">SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.j2gnap2rwq2i" target="_blank">Homework Doc</a>`,
        img:"imgs/de.png"
    },
    "What Does This Program Do? - Strings":{
        header:`Analyzing pseudocode to determine what a program does is a key skill in programming. It involves understanding the flow of control, conditions, and how variables change throughout the program.<br><br>
        This lesson focuses on strings, which are collections of characters. It includes iterating over and using strings, as well as slicing and using string operations.<br><br>
        ACSL has their own pseudocode format, which is similar to Python but with some differences. It has specific syntax for strings.<br><br>
        <b>MORE RESOURCES:</b><br>
        <ul>
            <li><a href="https://www.categories.acsl.org/wiki/index.php?title=What_Does_This_Program_Do%3F" target="_blank">ACSL WIKI</a></li>
            <li><a href="https://docs.google.com/presentation/d/1NGUUtHK0TrIGwP0SNt__OJ0oWFHbIWaCj6duXHu0oks/edit?usp=sharing" target="_blank">SLIDES</a></li>
        </ul>
        `,
        homework:`<a href="https://docs.google.com/document/d/1XCtOv9mBLgCGQPgAS4fUWqY4w7cgmKV1Bkk9keIbWGQ/edit?tab=t.0#heading=h.2g7clv1ustej" target="_blank">Homework Doc</a>`,
        img:"imgs/wdtpds.png"
    },
}