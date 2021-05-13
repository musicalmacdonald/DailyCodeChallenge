package com.megan;

import java.util.ArrayDeque;
import java.util.Deque;

public class HtmlParser {
//  Taken from JetBrains https://hyperskill.org/learn/step/3658

/*  Task: Today you will create your own HTML parser! It should print the content for each pair of tags.
    There are two rules for printing order:
        1. the same hierarchy level tags are processed left to right;
        2. if a tag has other tags as children, children should be processed first. If there are no children or all of them were processed already, the tag can be processed.
    Let's see how it works and why:

    // Input 1
        <html>content</html>

    // Output1
        content

      Explanation: There is a single pair of html tag, its content is "content".

    // Input 2
        <html><h1>content1</h1><h2>content2</h2></html>

    // Output 2
        content1
        content2
        <h1>content1</h1><h2>content2</h2>
      Explanation: There are 3 pairs of tags: html, h1 and h2. h1 and h2 are preferred by rule 2 because they are children of html.
      h1 goes before h2 by rule 1.

    // Input 3
        <html><h1>content1</h1><div><h2>content2</h2></div></html>

    // Output:
        content1
        content2
        <h2>content2</h2>
        <h1>content1</h1><div><h2>content2</h2></div>

    // Input 4
        <html><a>hello</a><h1><h4>nestedHello</h4><h3>nestedWorld</h3><h6><br>top</br></h6></h1><br>world</br></html>

    // Output 4:
       hello
       nestedHello
       nestedWorld
       top
       <br>top</br>
       <h4>nestedHello</h4><h3>nestedWorld</h3><h6><br>top</br></h6>
       world
       <a>hello</a><h1><h4>nestedHello</h4><h3>nestedWorld</h3><h6><br>top</br></h6></h1><br>world</br>

 */

  public static void runProblem() {

    String input1 = "<html>content</html>";
    String input2 = "<html><h1>content1</h1><h2>content2</h2></html>";
    String input3 = "<html><h1>content1</h1><div><h2>content2</h2></div></html>";
    String input4 = "<html><a>hello</a><h1><h4>nestedHello</h4><h3>nestedWorld</h3><h6><br>top</br></h6></h1><br>world</br></html>";

    System.out.printf("Input 1: %n %s %n %n Output: %n", input1);
    parseHtml(input1);
    System.out.printf("%nInput 2: %n %s %n %n Output: %n", input2);
    parseHtml(input2);
    System.out.printf("%nInput 3: %n %s %n %n Output: %n", input3);
    parseHtml(input3);
    System.out.printf("%nInput 4: %n %s %n %n Output: %n", input4);
    parseHtml(input4);

  }

  public static void parseHtml(String html) {
    Deque<String> contentStack = new ArrayDeque<>();
    String htmlCopy = html;

    String tag = "";
    boolean recordTag = true;

    for (int i = 0; i < htmlCopy.length(); i++) {
      String nextChar = htmlCopy.substring(i, i + 1);

      if (recordTag) tag += nextChar;

      if (">".equals(nextChar) && recordTag) {
        String closingTag = "</" + tag.substring(1);
        int start = i + 1;
        int end = htmlCopy.indexOf(closingTag);
        String content = htmlCopy.substring(start, end);

        if (content.contains("<")) {
          contentStack.addLast(content);
        } else {
          System.out.println(content);
          htmlCopy = htmlCopy.substring(0, start) + htmlCopy.substring(end + closingTag.length());
        }
        tag = "";
      } else if ("<".equals(nextChar) && !recordTag) {
        recordTag = true;
        tag += nextChar;
      } else if ("/".equals(nextChar)) {
        tag = "";
        recordTag = false;
        System.out.println(contentStack.pollLast());
      }
    }

    printStack(contentStack);
  }

  public static void printStack(Deque<String> stack) {
    while (!stack.isEmpty()) {
      System.out.println(stack.pollLast());
    }
  }

}
